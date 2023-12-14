import React, { useState, useRef, useEffect } from 'react';
import './CountryCreatePost.css'; // Import your CSS file

const countries = ['🇦🇫 Afghanistan',
  '🇦🇱 Albania',
  '🇩🇿 Algeria',
  '🇦🇩 Andorra',
  '🇦🇴 Angola',
  '🇦🇬 Antigua and Barbuda',
  '🇦🇷 Argentina',
  '🇦🇲 Armenia',
  '🇦🇺 Australia',
  '🇦🇹 Austria',
  '🇦🇿 Azerbaijan',
  '🇧🇸 Bahamas',
  '🇧🇭 Bahrain',
  '🇧🇩 Bangladesh',
  '🇧🇧 Barbados',
  '🇧🇾 Belarus',
  '🇧🇪 Belgium',
  '🇧🇿 Belize',
  '🇧🇯 Benin',
  '🇧🇹 Bhutan',
  '🇧🇴 Bolivia',
  '🇧🇦 Bosnia and Herzegovina',
  '🇧🇼 Botswana',
  '🇧🇷 Brazil',
  '🇧🇳 Brunei',
  '🇧🇬 Bulgaria',
  '🇧🇫 Burkina Faso',
  '🇧🇮 Burundi',
  '🇨🇮 Côte d\'Ivoire',
  '🇨🇻 Cabo Verde',
  '🇰🇭 Cambodia',
  '🇨🇲 Cameroon',
  '🇨🇦 Canada',
  '🇨🇫 Central African Republic',
  '🇹🇩 Chad',
  '🇨🇱 Chile',
  '🇨🇳 China',
  '🇨🇴 Colombia',
  '🇰🇲 Comoros',
  '🇨🇬 Congo (Congo-Brazzaville)',
  '🇨🇷 Costa Rica',
  '🇭🇷 Croatia',
  '🇨🇺 Cuba',
  '🇨🇾 Cyprus',
  '🇨🇿 Czechia (Czech Republic)',
  '🇨🇩 Democratic Republic of the Congo',
  '🇩🇰 Denmark',
  '🇩🇯 Djibouti',
  '🇩🇲 Dominica',
  '🇩🇴 Dominican Republic',
  '🇹🇱 East Timor (Timor-Leste)',
  '🇪🇨 Ecuador',
  '🇪🇬 Egypt',
  '🇸🇻 El Salvador',
  '🇬🇶 Equatorial Guinea',
  '🇪🇷 Eritrea',
  '🇪🇪 Estonia',
  '🇸🇿 Eswatini',
  '🇪🇹 Ethiopia',
  '🇫🇯 Fiji',
  '🇫🇮 Finland',
  '🇫🇷 France',
  '🇬🇦 Gabon',
  '🇬🇲 Gambia',
  '🇬🇪 Georgia',
  '🇩🇪 Germany',
  '🇬🇭 Ghana',
  '🇬🇷 Greece',
  '🇬🇩 Grenada',
  '🇬🇹 Guatemala',
  '🇬🇳 Guinea',
  '🇬🇼 Guinea-Bissau',
  '🇬🇾 Guyana',
  '🇭🇹 Haiti',
  '🇻🇦 Holy See',
  '🇭🇳 Honduras',
  '🇭🇺 Hungary',
  '🇮🇸 Iceland',
  '🇮🇳 India',
  '🇮🇩 Indonesia',
  '🇮🇷 Iran',
  '🇮🇶 Iraq',
  '🇮🇪 Ireland',
  '🇮🇱 Israel',
  '🇮🇹 Italy',
  '🇯🇲 Jamaica',
  '🇯🇵 Japan',
  '🇯🇴 Jordan',
  '🇰🇿 Kazakhstan',
  '🇰🇪 Kenya',
  '🇰🇮 Kiribati',
  '🇰🇼 Kuwait',
  '🇰🇬 Kyrgyzstan',
  '🇱🇦 Laos',
  '🇱🇻 Latvia',
  '🇱🇧 Lebanon',
  '🇱🇸 Lesotho',
  '🇱🇷 Liberia',
  '🇱🇾 Libya',
  '🇱🇮 Liechtenstein',
  '🇱🇹 Lithuania',
  '🇱🇺 Luxembourg',
  '🇲🇬 Madagascar',
  '🇲🇼 Malawi',
  '🇲🇾 Malaysia',
  '🇲🇻 Maldives',
  '🇲🇱 Mali',
  '🇲🇹 Malta',
  '🇲🇭 Marshall Islands',
  '🇲🇷 Mauritania',
  '🇲🇺 Mauritius',
  '🇲🇽 Mexico',
  '🇫🇲 Micronesia',
  '🇲🇩 Moldova',
  '🇲🇨 Monaco',
  '🇲🇳 Mongolia',
  '🇲🇪 Montenegro',
  '🇲🇦 Morocco',
  '🇲🇿 Mozambique',
  '🇲🇲 Myanmar (formerly Burma)',
  '🇳🇦 Namibia',
  '🇳🇷 Nauru',
  '🇳🇵 Nepal',
  '🇳🇱 Netherlands',
  '🇳🇿 New Zealand',
  '🇳🇮 Nicaragua',
  '🇳🇪 Niger',
  '🇳🇬 Nigeria',
  '🇰🇵 North Korea',
  '🇲🇰 North Macedonia (formerly Macedonia)',
  '🇳🇴 Norway',
  '🇴🇲 Oman',
  '🇵🇰 Pakistan',
  '🇵🇼 Palau',
  '🇵🇦 Panama',
  '🇵🇬 Papua New Guinea',
  '🇵🇾 Paraguay',
  '🇵🇪 Peru',
  '🇵🇭 Philippines',
  '🇵🇱 Poland',
  '🇵🇹 Portugal',
  '🇶🇦 Qatar',
  '🇷🇴 Romania',
  '🇷🇺 Russia',
  '🇷🇼 Rwanda',
  '🇰🇳 Saint Kitts and Nevis',
  '🇱🇨 Saint Lucia',
  '🇻🇨 Saint Vincent and the Grenadines',
  '🇼🇸 Samoa',
  '🇸🇲 San Marino',
  '🇸🇹 Sao Tome and Principe',
  '🇸🇦 Saudi Arabia',
  '🇸🇳 Senegal',
  '🇷🇸 Serbia',
  '🇸🇨 Seychelles',
  '🇸🇱 Sierra Leone',
  '🇸🇬 Singapore',
  '🇸🇰 Slovakia',
  '🇸🇮 Slovenia',
  '🇸🇧 Solomon Islands',
  '🇸🇴 Somalia',
  '🇿🇦 South Africa',
  '🇰🇷 South Korea',
  '🇸🇸 South Sudan',
  '🇪🇸 Spain',
  '🇱🇰 Sri Lanka',
  '🇵🇸 State of Palestine',
  '🇸🇩 Sudan',
  '🇸🇷 Suriname',
  '🇸🇪 Sweden',
  '🇨🇭 Switzerland',
  '🇸🇾 Syria',
  '🇹🇯 Tajikistan',
  '🇹🇿 Tanzania',
  '🇹🇭 Thailand',
  '🇹🇬 Togo',
  '🇹🇴 Tonga',
  '🇹🇹 Trinidad and Tobago',
  '🇹🇳 Tunisia',
  '🇹🇷 Turkey',
  '🇹🇲 Turkmenistan',
  '🇹🇻 Tuvalu',
  '🇺🇬 Uganda',
  '🇺🇦 Ukraine',
  '🇦🇪 United Arab Emirates',
  '🇬🇧 United Kingdom',
  '🇺🇸 United States of America',
  '🇺🇾 Uruguay',
  '🇺🇿 Uzbekistan',
  '🇻🇺 Vanuatu',
  '🇻🇪 Venezuela',
  '🇻🇳 Vietnam',
  '🇾🇪 Yemen',
  '🇿🇲 Zambia',
  '🇿🇼 Zimbabwe'
];

const CountryCreatePost = ({ specialTag, handleSpecialTagChange, onCountryChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isListVisible, setListVisible] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('');
  
  const inputRef = useRef(null);

  useEffect(() => {
    // Close the list when clicking outside the search container
    const handleOutsideClick = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setListVisible(false);
      }
    };

    window.addEventListener('click', handleOutsideClick);

    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const handleInputChange = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    setListVisible(term.length > 0); // Show the list if the search term is not empty
  };

  const handleCountryClick = (country) => {
    // Add the selected country to the predefined tags
    const updatedTags = [...specialTag, country];

    // Set the selected country in the search field
    setSearchTerm(country);
    setSelectedCountry(country);

    // Hide the list
    setListVisible(false);

    // Update the parent component's state with the new tags
    handleSpecialTagChange(updatedTags);
    onCountryChange(country);
  };

  const filteredCountries = countries.filter(countries =>
    countries.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="search-container" ref={inputRef}>
      {/* Search input field */}
      <input
        type="text"
        className="search-input"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
        onClick={() => setListVisible(true)} // Show the list on click
      />

      {/* List of filtered countries (conditionally rendered) */}
      {isListVisible && (
        <ul className="country-list">
          {filteredCountries.map((country, index) => (
            <li
              key={index}
              className={`list-country ${selectedCountry === country ? 'selected' : ''}`}
              onClick={() => handleCountryClick(country)}
            >
              {country}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CountryCreatePost;