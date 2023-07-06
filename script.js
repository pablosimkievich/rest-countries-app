// API request para country data
fetch("https://restcountries.com/v2/all")
  .then((response) => response.json())
  .then((data) => {

        // Light mode Dark Mode

        const light = document.querySelector(".fa-sun");
        const dark = document.querySelector(".fa-moon");
    
        light.addEventListener("click", () => {
          console.log("light")
          body.style.backgroundColor = "var(--light-body)";
          container.style.backgroundColor = "var(--light-container)";
          header.style.backgroundColor = "var(--light-container)";
        })
    
        dark.addEventListener("click", () => {
          console.log("dark")
          body.style.backgroundColor = "var(--dark-body)";
          container.style.backgroundColor = "var(--dark-container)";
          header.style.backgroundColor = "var(--dark-container)";
        })

    // Light and Dark mode selectors
    const body =  document.querySelector(".body");
    const container = document.querySelector(".container");
    const header = document.querySelector(".header")

    const countryList = document.getElementById("countryList");
    const continentOption = document.getElementById("continent");
    const searchInput = document.querySelector(".input");
    const searchButton = document.querySelector(".btn");


    

    // Busqueda por país
    searchButton.addEventListener("click", () => {
      let searchQuery = searchInput.value.toLowerCase();

      data.forEach((element) => {
        let searchCountry = element.name.toLowerCase();

        if (searchCountry.includes(searchQuery)) {
          countryList.textContent = "";
          const countryDiv = document.createElement("div");
          countryDiv.classList.add("countryDetail");
          const countryData = document.createElement("div");
          countryData.classList.add("countryData");

          const flagImg = document.createElement("img");
          flagImg.src = element.flags.svg;
          flagImg.alt = `${element.name} flag`;

          const countryName = document.createElement("span");
          const countryContinent = document.createElement("span");
          const countryPopulation = document.createElement("span");
          const countryCapitalCity = document.createElement("span");

          countryContinent.classList.add("datosCountry");
          countryPopulation.classList.add("datosCountry");
          countryCapitalCity.classList.add("datosCountry");

          countryName.textContent = element.name;
          countryContinent.textContent = element.region;
          countryPopulation.textContent = `Población: ${element.population}`;
          countryCapitalCity.textContent = `Capital: ${element.capital}`;

          countryDiv.appendChild(flagImg);
          countryDiv.appendChild(countryName);
          countryDiv.appendChild(countryContinent);
          countryData.appendChild(countryPopulation);
          countryData.appendChild(countryCapitalCity);
          countryList.appendChild(countryData);
          countryList.appendChild(countryDiv);
        }
      });
    });

    // Selección de continente
    continentOption.addEventListener("change", () => {
      const selectedOption = parseInt(continentOption.value);

      if (selectedOption == 1) {
        console.log("Asia");

        fetch("https://restcountries.com/v2/region/Asia")
          .then((response) => response.json())
          .then((data) => {
            const countryList = document.getElementById("countryList");
            const continentOption = document.getElementById("continent");

            // Mapeo de los países de Asia
            countryList.textContent = "";

            data.map((country) => {
              const countryDiv = document.createElement("div");
              countryDiv.classList.add("country");

              const flagImg = document.createElement("img");
              flagImg.src = country.flags.svg;
              flagImg.alt = `${country.name} flag`;

              const countryName = document.createElement("span");
              const countryContinent = document.createElement("span");
              const countryPopulation = document.createElement("span");
              const countryCapitalCity = document.createElement("span");
              const countryLink = document.createElement("a");
              const countryCode = country.alpha2Code;

              // Detalle de países de Asia
              countryLink.addEventListener("click", () => {
                fetch(`https://restcountries.com/v2/alpha/${countryCode}`)
                  .then((response) => response.json())
                  .then((data) => {
                    countryList.textContent = "";
                    const countryDiv = document.createElement("div");
                    countryDiv.classList.add("countryDetail");
                    const countryData = document.createElement("div");
                    countryData.classList.add("countryData");

                    const flagImg = document.createElement("img");
                    flagImg.src = data.flags.svg;
                    flagImg.alt = `${data.name} flag`;

                    const countryName = document.createElement("span");
                    const countryContinent = document.createElement("span");
                    const countryPopulation = document.createElement("span");
                    const countryCapitalCity = document.createElement("span");

                    countryContinent.classList.add("datosCountry");
                    countryPopulation.classList.add("datosCountry");
                    countryCapitalCity.classList.add("datosCountry");

                    countryName.textContent = data.name;
                    countryContinent.textContent = data.region;
                    countryPopulation.textContent = `Población: ${data.population}`;
                    countryCapitalCity.textContent = `Capital: ${data.capital}`;

                    countryDiv.appendChild(flagImg);
                    countryDiv.appendChild(countryName);
                    countryDiv.appendChild(countryContinent);
                    countryData.appendChild(countryPopulation);
                    countryData.appendChild(countryCapitalCity);
                    countryList.appendChild(countryData);
                    countryList.appendChild(countryDiv);
                  });
              });
              // Fin detalle de países de Asia

              countryContinent.classList.add("datos");
              countryPopulation.classList.add("datos");
              countryCapitalCity.classList.add("datos");

              countryName.textContent = country.name;
              countryContinent.textContent = `Región: ${country.subregion}`;
              countryPopulation.textContent = `Población: ${country.population}`;
              countryCapitalCity.textContent = `Capital: ${country.capital}`;

              countryDiv.appendChild(flagImg);
              countryDiv.appendChild(countryName);
              countryDiv.appendChild(countryContinent);
              countryDiv.appendChild(countryPopulation);
              countryDiv.appendChild(countryCapitalCity);

              countryLink.appendChild(countryDiv);

              countryList.appendChild(countryLink);
            });
          });
      } else if (selectedOption == 2) {
        console.log("América");

        fetch("https://restcountries.com/v2/region/Americas")
          .then((response) => response.json())
          .then((data) => {
            const countryList = document.getElementById("countryList");
            const continentOption = document.getElementById("continent");

            // Mapeo de los países de América
            countryList.textContent = "";

            data.map((country) => {
              const countryDiv = document.createElement("div");
              countryDiv.classList.add("country");

              const flagImg = document.createElement("img");
              flagImg.src = country.flags.svg;
              flagImg.alt = `${country.name} flag`;

              const countryName = document.createElement("span");
              const countryContinent = document.createElement("span");
              const countryPopulation = document.createElement("span");
              const countryCapitalCity = document.createElement("span");
              const countryLink = document.createElement("a");
              const countryCode = country.alpha2Code;

              // Detalle de países de América
              countryLink.addEventListener("click", () => {
                fetch(`https://restcountries.com/v2/alpha/${countryCode}`)
                  .then((response) => response.json())
                  .then((data) => {
                    countryList.textContent = "";
                    const countryDiv = document.createElement("div");
                    countryDiv.classList.add("countryDetail");
                    const countryData = document.createElement("div");
                    countryData.classList.add("countryData");

                    const flagImg = document.createElement("img");
                    flagImg.src = data.flags.svg;
                    flagImg.alt = `${data.name} flag`;

                    const countryName = document.createElement("span");
                    const countryContinent = document.createElement("span");
                    const countryPopulation = document.createElement("span");
                    const countryCapitalCity = document.createElement("span");

                    countryContinent.classList.add("datosCountry");
                    countryPopulation.classList.add("datosCountry");
                    countryCapitalCity.classList.add("datosCountry");

                    countryName.textContent = data.name;
                    countryContinent.textContent = data.region;
                    countryPopulation.textContent = `Población: ${data.population}`;
                    countryCapitalCity.textContent = `Capital: ${data.capital}`;

                    countryDiv.appendChild(flagImg);
                    countryDiv.appendChild(countryName);
                    countryDiv.appendChild(countryContinent);
                    countryData.appendChild(countryPopulation);
                    countryData.appendChild(countryCapitalCity);
                    countryList.appendChild(countryData);
                    countryList.appendChild(countryDiv);
                  });
              });
              // Fin detalle de países de América

              countryContinent.classList.add("datos");
              countryPopulation.classList.add("datos");
              countryCapitalCity.classList.add("datos");

              countryName.textContent = country.name;
              countryContinent.textContent = `Región: ${country.subregion}`;
              countryPopulation.textContent = `Población: ${country.population}`;
              countryCapitalCity.textContent = `Capital: ${country.capital}`;

              countryDiv.appendChild(flagImg);
              countryDiv.appendChild(countryName);
              countryDiv.appendChild(countryContinent);
              countryDiv.appendChild(countryPopulation);
              countryDiv.appendChild(countryCapitalCity);

              countryLink.appendChild(countryDiv);

              countryList.appendChild(countryLink);
            });
          });
      } else if (selectedOption == 3) {
        console.log("Africa");

        fetch("https://restcountries.com/v2/region/Africa")
          .then((response) => response.json())
          .then((data) => {
            const countryList = document.getElementById("countryList");
            const continentOption = document.getElementById("continent");

            // Mapeo de los países de Africa
            countryList.textContent = "";

            data.map((country) => {
              const countryDiv = document.createElement("div");
              countryDiv.classList.add("country");

              const flagImg = document.createElement("img");
              flagImg.src = country.flags.svg;
              flagImg.alt = `${country.name} flag`;

              const countryName = document.createElement("span");
              const countryContinent = document.createElement("span");
              const countryPopulation = document.createElement("span");
              const countryCapitalCity = document.createElement("span");
              const countryLink = document.createElement("a");
              const countryCode = country.alpha2Code;

              // Detalle de los países de Africa
              countryLink.addEventListener("click", () => {
                fetch(`https://restcountries.com/v2/alpha/${countryCode}`)
                  .then((response) => response.json())
                  .then((data) => {
                    countryList.textContent = "";
                    const countryDiv = document.createElement("div");
                    countryDiv.classList.add("countryDetail");
                    const countryData = document.createElement("div");
                    countryData.classList.add("countryData");

                    const flagImg = document.createElement("img");
                    flagImg.src = data.flags.svg;
                    flagImg.alt = `${data.name} flag`;

                    const countryName = document.createElement("span");
                    const countryContinent = document.createElement("span");
                    const countryPopulation = document.createElement("span");
                    const countryCapitalCity = document.createElement("span");

                    countryContinent.classList.add("datosCountry");
                    countryPopulation.classList.add("datosCountry");
                    countryCapitalCity.classList.add("datosCountry");

                    countryName.textContent = data.name;
                    countryContinent.textContent = data.region;
                    countryPopulation.textContent = `Población: ${data.population}`;
                    countryCapitalCity.textContent = `Capital: ${data.capital}`;

                    countryDiv.appendChild(flagImg);
                    countryDiv.appendChild(countryName);
                    countryDiv.appendChild(countryContinent);
                    countryData.appendChild(countryPopulation);
                    countryData.appendChild(countryCapitalCity);
                    countryList.appendChild(countryData);
                    countryList.appendChild(countryDiv);
                  });
              });
              // Fin detalle de países de Africa

              countryContinent.classList.add("datos");
              countryPopulation.classList.add("datos");
              countryCapitalCity.classList.add("datos");

              countryName.textContent = country.name;
              countryContinent.textContent = `Región: ${country.subregion}`;
              countryPopulation.textContent = `Población: ${country.population}`;
              countryCapitalCity.textContent = `Capital: ${country.capital}`;

              countryDiv.appendChild(flagImg);
              countryDiv.appendChild(countryName);
              countryDiv.appendChild(countryContinent);
              countryDiv.appendChild(countryPopulation);
              countryDiv.appendChild(countryCapitalCity);

              countryLink.appendChild(countryDiv);

              countryList.appendChild(countryLink);
            });
          });
      } else if (selectedOption == 4) {
        console.log("Europa");

        fetch("https://restcountries.com/v2/region/Europe")
          .then((response) => response.json())
          .then((data) => {
            const countryList = document.getElementById("countryList");
            const continentOption = document.getElementById("continent");

            // Mapeo de los países de Europa
            countryList.textContent = "";

            data.map((country) => {
              const countryDiv = document.createElement("div");
              countryDiv.classList.add("country");

              const flagImg = document.createElement("img");
              flagImg.src = country.flags.svg;
              flagImg.alt = `${country.name} flag`;

              const countryName = document.createElement("span");
              const countryContinent = document.createElement("span");
              const countryPopulation = document.createElement("span");
              const countryCapitalCity = document.createElement("span");
              const countryLink = document.createElement("a");
              const countryCode = country.alpha2Code;

              // Detalle de los países de Europa
              countryLink.addEventListener("click", () => {
                fetch(`https://restcountries.com/v2/alpha/${countryCode}`)
                  .then((response) => response.json())
                  .then((data) => {
                    countryList.textContent = "";
                    const countryDiv = document.createElement("div");
                    countryDiv.classList.add("countryDetail");
                    const countryData = document.createElement("div");
                    countryData.classList.add("countryData");

                    const flagImg = document.createElement("img");
                    flagImg.src = data.flags.svg;
                    flagImg.alt = `${data.name} flag`;

                    const countryName = document.createElement("span");
                    const countryContinent = document.createElement("span");
                    const countryPopulation = document.createElement("span");
                    const countryCapitalCity = document.createElement("span");

                    countryContinent.classList.add("datosCountry");
                    countryPopulation.classList.add("datosCountry");
                    countryCapitalCity.classList.add("datosCountry");

                    countryName.textContent = data.name;
                    countryContinent.textContent = data.region;
                    countryPopulation.textContent = `Población: ${data.population}`;
                    countryCapitalCity.textContent = `Capital: ${data.capital}`;

                    countryDiv.appendChild(flagImg);
                    countryDiv.appendChild(countryName);
                    countryDiv.appendChild(countryContinent);
                    countryData.appendChild(countryPopulation);
                    countryData.appendChild(countryCapitalCity);
                    countryList.appendChild(countryData);
                    countryList.appendChild(countryDiv);
                  });
              });
              // Fin detalle de los países de Europa

              countryContinent.classList.add("datos");
              countryPopulation.classList.add("datos");
              countryCapitalCity.classList.add("datos");

              countryName.textContent = country.name;
              countryContinent.textContent = `Región: ${country.subregion}`;
              countryPopulation.textContent = `Población: ${country.population}`;
              countryCapitalCity.textContent = `Capital: ${country.capital}`;

              countryDiv.appendChild(flagImg);
              countryDiv.appendChild(countryName);
              countryDiv.appendChild(countryContinent);
              countryDiv.appendChild(countryPopulation);
              countryDiv.appendChild(countryCapitalCity);

              countryLink.appendChild(countryDiv);

              countryList.appendChild(countryLink);
            });
          });
      } else if (selectedOption == 5) {
        console.log("Oceanía");

        fetch("https://restcountries.com/v2/region/Oceania")
          .then((response) => response.json())
          .then((data) => {
            const countryList = document.getElementById("countryList");
            const continentOption = document.getElementById("continent");

            // Mapeo de los países de Oceanía
            countryList.textContent = "";

            data.map((country) => {
              const countryDiv = document.createElement("div");
              countryDiv.classList.add("country");

              const flagImg = document.createElement("img");
              flagImg.src = country.flags.svg;
              flagImg.alt = `${country.name} flag`;

              const countryName = document.createElement("span");
              const countryContinent = document.createElement("span");
              const countryPopulation = document.createElement("span");
              const countryCapitalCity = document.createElement("span");
              const countryLink = document.createElement("a");
              const countryCode = country.alpha2Code;

              countryLink.addEventListener("click", () => {
                fetch(`https://restcountries.com/v2/alpha/${countryCode}`)
                  .then((response) => response.json())
                  .then((data) => {
                    countryList.textContent = "";
                    const countryDiv = document.createElement("div");
                    countryDiv.classList.add("countryDetail");
                    const countryData = document.createElement("div");
                    countryData.classList.add("countryData");

                    const flagImg = document.createElement("img");
                    flagImg.src = data.flags.svg;
                    flagImg.alt = `${data.name} flag`;

                    const countryName = document.createElement("span");
                    const countryContinent = document.createElement("span");
                    const countryPopulation = document.createElement("span");
                    const countryCapitalCity = document.createElement("span");

                    countryContinent.classList.add("datosCountry");
                    countryPopulation.classList.add("datosCountry");
                    countryCapitalCity.classList.add("datosCountry");

                    countryName.textContent = data.name;
                    countryContinent.textContent = data.region;
                    countryPopulation.textContent = `Población: ${data.population}`;
                    countryCapitalCity.textContent = `Capital: ${data.capital}`;

                    countryDiv.appendChild(flagImg);
                    countryDiv.appendChild(countryName);
                    countryDiv.appendChild(countryContinent);
                    countryData.appendChild(countryPopulation);
                    countryData.appendChild(countryCapitalCity);
                    countryList.appendChild(countryData);
                    countryList.appendChild(countryDiv);
                  });
              });
              // Fin detalle de los países de Oceanía

              countryContinent.classList.add("datos");
              countryPopulation.classList.add("datos");
              countryCapitalCity.classList.add("datos");

              countryName.textContent = country.name;
              countryContinent.textContent = `Región: ${country.subregion}`;
              countryPopulation.textContent = `Población: ${country.population}`;
              countryCapitalCity.textContent = `Capital: ${country.capital}`;

              countryDiv.appendChild(flagImg);
              countryDiv.appendChild(countryName);
              countryDiv.appendChild(countryContinent);
              countryDiv.appendChild(countryPopulation);
              countryDiv.appendChild(countryCapitalCity);

              countryLink.appendChild(countryDiv);

              countryList.appendChild(countryLink);
            });
          });
      } else if (selectedOption == "") {
        console.log("All");

        fetch("https://restcountries.com/v2/all")
          .then((response) => response.json())
          .then((data) => {
            const countryList = document.getElementById("countryList");
            const continentOption = document.getElementById("continent");

            // Mapeo todos en caso de deseleccionar los continentes
            countryList.textContent = "";

            data.map((country) => {
              const countryDiv = document.createElement("div");
              countryDiv.classList.add("country");

              const flagImg = document.createElement("img");
              flagImg.src = country.flags.svg;
              flagImg.alt = `${country.name} flag`;

              const countryName = document.createElement("span");
              const countryContinent = document.createElement("span");
              const countryPopulation = document.createElement("span");
              const countryCapitalCity = document.createElement("span");
              const countryLink = document.createElement("a");
              const countryCode = country.alpha2Code;

              // Detalle de todos los países
              countryLink.addEventListener("click", () => {
                fetch(`https://restcountries.com/v2/alpha/${countryCode}`)
                  .then((response) => response.json())
                  .then((data) => {
                    countryList.textContent = "";
                    const countryDiv = document.createElement("div");
                    countryDiv.classList.add("countryDetail");
                    const countryData = document.createElement("div");
                    countryData.classList.add("countryData");

                    const flagImg = document.createElement("img");
                    flagImg.src = data.flags.svg;
                    flagImg.alt = `${data.name} flag`;

                    const countryName = document.createElement("span");
                    const countryContinent = document.createElement("span");
                    const countryPopulation = document.createElement("span");
                    const countryCapitalCity = document.createElement("span");

                    countryContinent.classList.add("datosCountry");
                    countryPopulation.classList.add("datosCountry");
                    countryCapitalCity.classList.add("datosCountry");

                    countryName.textContent = data.name;
                    countryContinent.textContent = data.region;
                    countryPopulation.textContent = `Población: ${data.population}`;
                    countryCapitalCity.textContent = `Capital: ${data.capital}`;

                    countryDiv.appendChild(flagImg);
                    countryDiv.appendChild(countryName);
                    countryDiv.appendChild(countryContinent);

                    countryData.appendChild(countryPopulation);
                    countryData.appendChild(countryCapitalCity);
                    countryList.appendChild(countryData);
                    countryList.appendChild(countryDiv);
                  });
              });
              // Fin detalle de todos los países
              
              countryContinent.classList.add("datos");
              countryPopulation.classList.add("datos");
              countryCapitalCity.classList.add("datos");

              countryName.textContent = country.name;
              countryContinent.textContent = country.region;

              countryDiv.appendChild(flagImg);
              countryDiv.appendChild(countryName);
              countryDiv.appendChild(countryContinent);

              countryLink.appendChild(countryDiv);

              countryList.appendChild(countryLink);
            });
          });
      }
    });

    // Mapeo the todos los países al iniciar la app
    data.map((country) => {
      const countryDiv = document.createElement("div");
      countryDiv.classList.add("country");

      const flagImg = document.createElement("img");
      flagImg.src = country.flags.svg;
      flagImg.alt = `${country.name} flag`;

      const countryName = document.createElement("span");
      const countryContinent = document.createElement("span");
      const countryLink = document.createElement("a");
      const countryCode = country.alpha2Code;

      // Detalle de todos los países al inicio app
      countryLink.addEventListener("click", () => {
        fetch(`https://restcountries.com/v2/alpha/${countryCode}`)
          .then((response) => response.json())
          .then((data) => {
            countryList.textContent = "";
            const countryDiv = document.createElement("div");
            countryDiv.classList.add("countryDetail");
            const countryData = document.createElement("div");
            countryData.classList.add("countryData");

            const flagImg = document.createElement("img");
            flagImg.src = data.flags.svg;
            flagImg.alt = `${data.name} flag`;

            const countryName = document.createElement("span");
            const countryContinent = document.createElement("span");
            const countryPopulation = document.createElement("span");
            const countryCapitalCity = document.createElement("span");

            countryContinent.classList.add("datosCountry");
            countryPopulation.classList.add("datosCountry");
            countryCapitalCity.classList.add("datosCountry");

            countryName.textContent = data.name;
            countryContinent.textContent = data.region;
            countryPopulation.textContent = `Población: ${data.population}`;
            countryCapitalCity.textContent = `Capital: ${data.capital}`;

            countryDiv.appendChild(flagImg);
            countryDiv.appendChild(countryName);
            countryDiv.appendChild(countryContinent);
            countryData.appendChild(countryPopulation);
            countryData.appendChild(countryCapitalCity);
            countryList.appendChild(countryData);
            countryList.appendChild(countryDiv);
          });
      });
      // Fin detalle de todos los países al inicio app

      countryContinent.classList.add("datos");

      countryName.textContent = country.name;
      countryContinent.textContent = country.region;

      countryDiv.appendChild(flagImg);
      countryDiv.appendChild(countryName);
      countryDiv.appendChild(countryContinent);
      countryLink.appendChild(countryDiv);

      countryList.appendChild(countryLink);
    });


  })
  .catch((error) => {
    console.log("An error occurred:", error);
  });


