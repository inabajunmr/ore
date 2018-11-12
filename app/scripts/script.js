chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
	if (request == "parrotize") {
		parrotize();
	}
});


const parrots=`http://countryparrots.com/parrots/afghanistan-parrot.gif
http://countryparrots.com/parrots/albania-parrot.gif
http://countryparrots.com/parrots/algeria-parrot.gif
http://countryparrots.com/parrots/andorra-parrot.gif
http://countryparrots.com/parrots/angola-parrot.gif
http://countryparrots.com/parrots/antigua-and-barbuda-parrot.gif
http://countryparrots.com/parrots/argentina-parrot.gif
http://countryparrots.com/parrots/armenia-parrot.gif
http://countryparrots.com/parrots/australia-parrot.gif
http://countryparrots.com/parrots/austria-parrot.gif
http://countryparrots.com/parrots/azerbaijan-parrot.gif
http://countryparrots.com/parrots/the-bahamas-parrot.gif
http://countryparrots.com/parrots/bahrain-parrot.gif
http://countryparrots.com/parrots/bangladesh-parrot.gif
http://countryparrots.com/parrots/barbados-parrot.gif
http://countryparrots.com/parrots/belarus-parrot.gif
http://countryparrots.com/parrots/belgium-parrot.gif
http://countryparrots.com/parrots/belize-parrot.gif
http://countryparrots.com/parrots/benin-parrot.gif
http://countryparrots.com/parrots/bhutan-parrot.gif
http://countryparrots.com/parrots/bolivia-parrot.gif
http://countryparrots.com/parrots/bosnia-and-herzegovina-parrot.gif
http://countryparrots.com/parrots/botswana-parrot.gif
http://countryparrots.com/parrots/brazil-parrot.gif
http://countryparrots.com/parrots/brunei-parrot.gif
http://countryparrots.com/parrots/bulgaria-parrot.gif
http://countryparrots.com/parrots/burkina-faso-parrot.gif
http://countryparrots.com/parrots/burundi-parrot.gif
http://countryparrots.com/parrots/cambodia-parrot.gif
http://countryparrots.com/parrots/cameroon-parrot.gif
http://countryparrots.com/parrots/canada-parrot.gif
http://countryparrots.com/parrots/cape-verde-parrot.gif
http://countryparrots.com/parrots/central-african-republic-parrot.gif
http://countryparrots.com/parrots/chad-parrot.gif
http://countryparrots.com/parrots/chile-parrot.gif
http://countryparrots.com/parrots/china-parrot.gif
http://countryparrots.com/parrots/colombia-parrot.gif
http://countryparrots.com/parrots/comoros-parrot.gif
http://countryparrots.com/parrots/democratic-republic-of-the-congo-parrot.gif
http://countryparrots.com/parrots/congo-parrot.gif
http://countryparrots.com/parrots/costa-rica-parrot.gif
http://countryparrots.com/parrots/croatia-parrot.gif
http://countryparrots.com/parrots/cuba-parrot.gif
http://countryparrots.com/parrots/cyprus-parrot.gif
http://countryparrots.com/parrots/czech-republic-parrot.gif
http://countryparrots.com/parrots/denmark-parrot.gif
http://countryparrots.com/parrots/djibouti-parrot.gif
http://countryparrots.com/parrots/dominica-parrot.gif
http://countryparrots.com/parrots/dominican-republic-parrot.gif
http://countryparrots.com/parrots/timor-leste-parrot.gif
http://countryparrots.com/parrots/ecuador-parrot.gif
http://countryparrots.com/parrots/egypt-parrot.gif
http://countryparrots.com/parrots/el-salvador-parrot.gif
http://countryparrots.com/parrots/equatorial-guinea-parrot.gif
http://countryparrots.com/parrots/eritrea-parrot.gif
http://countryparrots.com/parrots/estonia-parrot.gif
http://countryparrots.com/parrots/ethiopia-parrot.gif
http://countryparrots.com/parrots/fiji-parrot.gif
http://countryparrots.com/parrots/finland-parrot.gif
http://countryparrots.com/parrots/france-parrot.gif
http://countryparrots.com/parrots/gabon-parrot.gif
http://countryparrots.com/parrots/the-gambia-parrot.gif
http://countryparrots.com/parrots/georgia-parrot.gif
http://countryparrots.com/parrots/germany-parrot.gif
http://countryparrots.com/parrots/ghana-parrot.gif
http://countryparrots.com/parrots/greece-parrot.gif
http://countryparrots.com/parrots/grenada-parrot.gif
http://countryparrots.com/parrots/guatemala-parrot.gif
http://countryparrots.com/parrots/guinea-parrot.gif
http://countryparrots.com/parrots/guinea-bissau-parrot.gif
http://countryparrots.com/parrots/guyana-parrot.gif
http://countryparrots.com/parrots/haiti-parrot.gif
http://countryparrots.com/parrots/honduras-parrot.gif
http://countryparrots.com/parrots/hungary-parrot.gif
http://countryparrots.com/parrots/iceland-parrot.gif
http://countryparrots.com/parrots/india-parrot.gif
http://countryparrots.com/parrots/indonesia-parrot.gif
http://countryparrots.com/parrots/iran-parrot.gif
http://countryparrots.com/parrots/iraq-parrot.gif
http://countryparrots.com/parrots/ireland-parrot.gif
http://countryparrots.com/parrots/israel-parrot.gif
http://countryparrots.com/parrots/italy-parrot.gif
http://countryparrots.com/parrots/ivory-coast-parrot.gif
http://countryparrots.com/parrots/jamaica-parrot.gif
http://countryparrots.com/parrots/japan-parrot.gif
http://countryparrots.com/parrots/jordan-parrot.gif
http://countryparrots.com/parrots/kazakhstan-parrot.gif
http://countryparrots.com/parrots/kenya-parrot.gif
http://countryparrots.com/parrots/kiribati-parrot.gif
http://countryparrots.com/parrots/north-korea-parrot.gif
http://countryparrots.com/parrots/south-korea-parrot.gif
http://countryparrots.com/parrots/kuwait-parrot.gif
http://countryparrots.com/parrots/kyrgyzstan-parrot.gif
http://countryparrots.com/parrots/laos-parrot.gif
http://countryparrots.com/parrots/latvia-parrot.gif
http://countryparrots.com/parrots/lebanon-parrot.gif
http://countryparrots.com/parrots/lesotho-parrot.gif
http://countryparrots.com/parrots/liberia-parrot.gif
http://countryparrots.com/parrots/libya-parrot.gif
http://countryparrots.com/parrots/liechtenstein-parrot.gif
http://countryparrots.com/parrots/lithuania-parrot.gif
http://countryparrots.com/parrots/luxembourg-parrot.gif
http://countryparrots.com/parrots/macedonia-parrot.gif
http://countryparrots.com/parrots/madagascar-parrot.gif
http://countryparrots.com/parrots/malawi-parrot.gif
http://countryparrots.com/parrots/malaysia-parrot.gif
http://countryparrots.com/parrots/maldives-parrot.gif
http://countryparrots.com/parrots/mali-parrot.gif
http://countryparrots.com/parrots/malta-parrot.gif
http://countryparrots.com/parrots/marshall-islands-parrot.gif
http://countryparrots.com/parrots/mauritania-parrot.gif
http://countryparrots.com/parrots/mauritius-parrot.gif
http://countryparrots.com/parrots/mexico-parrot.gif
http://countryparrots.com/parrots/fs-micronesia-parrot.gif
http://countryparrots.com/parrots/moldova-parrot.gif
http://countryparrots.com/parrots/monaco-parrot.gif
http://countryparrots.com/parrots/mongolia-parrot.gif
http://countryparrots.com/parrots/montenegro-parrot.gif
http://countryparrots.com/parrots/morocco-parrot.gif
http://countryparrots.com/parrots/mozambique-parrot.gif
http://countryparrots.com/parrots/myanmar-parrot.gif
http://countryparrots.com/parrots/namibia-parrot.gif
http://countryparrots.com/parrots/nauru-parrot.gif
http://countryparrots.com/parrots/nepal-parrot.gif
http://countryparrots.com/parrots/kingdom-of-the-netherlands-parrot.gif
http://countryparrots.com/parrots/new-zealand-parrot.gif
http://countryparrots.com/parrots/nicaragua-parrot.gif
http://countryparrots.com/parrots/niger-parrot.gif
http://countryparrots.com/parrots/nigeria-parrot.gif
http://countryparrots.com/parrots/norway-parrot.gif
http://countryparrots.com/parrots/oman-parrot.gif
http://countryparrots.com/parrots/pakistan-parrot.gif
http://countryparrots.com/parrots/palau-parrot.gif
http://countryparrots.com/parrots/state-of-palestine-parrot.gif
http://countryparrots.com/parrots/panama-parrot.gif
http://countryparrots.com/parrots/papua-new-guinea-parrot.gif
http://countryparrots.com/parrots/paraguay-parrot.gif
http://countryparrots.com/parrots/peru-parrot.gif
http://countryparrots.com/parrots/philippines-parrot.gif
http://countryparrots.com/parrots/poland-parrot.gif
http://countryparrots.com/parrots/portugal-parrot.gif
http://countryparrots.com/parrots/puerto-rico-parrot.gif
http://countryparrots.com/parrots/qatar-parrot.gif
http://countryparrots.com/parrots/romania-parrot.gif
http://countryparrots.com/parrots/russia-parrot.gif
http://countryparrots.com/parrots/rwanda-parrot.gif
http://countryparrots.com/parrots/saint-kitts-and-nevis-parrot.gif
http://countryparrots.com/parrots/saint-lucia-parrot.gif
http://countryparrots.com/parrots/saint-vincent-and-the-grenadines-parrot.gif
http://countryparrots.com/parrots/samoa-parrot.gif
http://countryparrots.com/parrots/san-marino-parrot.gif
http://countryparrots.com/parrots/são-tomé-and-príncipe-parrot.gif
http://countryparrots.com/parrots/saudi-arabia-parrot.gif
http://countryparrots.com/parrots/senegal-parrot.gif
http://countryparrots.com/parrots/serbia-parrot.gif
http://countryparrots.com/parrots/seychelles-parrot.gif
http://countryparrots.com/parrots/sierra-leone-parrot.gif
http://countryparrots.com/parrots/singapore-parrot.gif
http://countryparrots.com/parrots/slovakia-parrot.gif
http://countryparrots.com/parrots/slovenia-parrot.gif
http://countryparrots.com/parrots/solomon-islands-parrot.gif
http://countryparrots.com/parrots/somalia-parrot.gif
http://countryparrots.com/parrots/south-africa-parrot.gif
http://countryparrots.com/parrots/south-sudan-parrot.gif
http://countryparrots.com/parrots/spain-parrot.gif
http://countryparrots.com/parrots/sri-lanka-parrot.gif
http://countryparrots.com/parrots/sudan-parrot.gif
http://countryparrots.com/parrots/suriname-parrot.gif
http://countryparrots.com/parrots/swaziland-parrot.gif
http://countryparrots.com/parrots/sweden-parrot.gif
http://countryparrots.com/parrots/switzerland-parrot.gif
http://countryparrots.com/parrots/syria-parrot.gif
http://countryparrots.com/parrots/tajikistan-parrot.gif
http://countryparrots.com/parrots/tanzania-parrot.gif
http://countryparrots.com/parrots/thailand-parrot.gif
http://countryparrots.com/parrots/togo-parrot.gif
http://countryparrots.com/parrots/tonga-parrot.gif
http://countryparrots.com/parrots/trinidad-and-tobago-parrot.gif
http://countryparrots.com/parrots/tunisia-parrot.gif
http://countryparrots.com/parrots/turkey-parrot.gif
http://countryparrots.com/parrots/turkmenistan-parrot.gif
http://countryparrots.com/parrots/tuvalu-parrot.gif
http://countryparrots.com/parrots/uganda-parrot.gif
http://countryparrots.com/parrots/ukraine-parrot.gif
http://countryparrots.com/parrots/united-arab-emirates-parrot.gif
http://countryparrots.com/parrots/united-kingdom-parrot.gif
http://countryparrots.com/parrots/united-states-parrot.gif
http://countryparrots.com/parrots/uruguay-parrot.gif
http://countryparrots.com/parrots/uzbekistan-parrot.gif
http://countryparrots.com/parrots/vanuatu-parrot.gif
http://countryparrots.com/parrots/vatican-city-parrot.gif
http://countryparrots.com/parrots/venezuela-parrot.gif
http://countryparrots.com/parrots/vietnam-parrot.gif
http://countryparrots.com/parrots/yemen-parrot.gif
http://countryparrots.com/parrots/zambia-parrot.gif
http://countryparrots.com/parrots/zimbabwe-parrot.gif
http://countryparrots.com/parrots/abkhazia-parrot.gif
http://countryparrots.com/parrots/cook-islands-parrot.gif
http://countryparrots.com/parrots/kosovo-parrot.gif
http://countryparrots.com/parrots/nagorno-karabakh-republic-parrot.gif
http://countryparrots.com/parrots/niue-parrot.gif
http://countryparrots.com/parrots/northern-cyprus-parrot.gif
http://countryparrots.com/parrots/sahrawi-arab-democratic-republic-parrot.gif
http://countryparrots.com/parrots/somaliland-parrot.gif
http://countryparrots.com/parrots/south-ossetia-parrot.gif
http://countryparrots.com/parrots/taiwan-parrot.gif
http://countryparrots.com/parrots/transnistria-parrot.gif`

function parrotize() {
	parrotsArray = parrots.split(/\n/)

	document.querySelectorAll("img").forEach(target => {
		i = Math.floor(Math.random() * parrotsArray.length)
		target.setAttribute("src", parrotsArray[i])
		target.removeAttribute("srcset")
	});
}
