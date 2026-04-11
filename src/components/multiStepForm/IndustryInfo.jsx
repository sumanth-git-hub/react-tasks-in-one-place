import React from "react";

const IndustryInfo = ({ inputValues, setInputValues, errorElement, setErrorElement }) => {
  const { industryCategory, sumInsured, registeredInIndia } = inputValues;

  const IndCategory = [
    "Banking Finance and Insurance",
    "Computer IT Technology and Communication",
    "Construction and Real Estate",
    "Manufacturing",
    "Medical and Pharmaceuticals",
    "Services",
    "Retail and E-commerce",
    "Automobiles and Electronics",
    "Home Lifestyle and Fitness",
    "Others",
  ];

  // const handleIndustryDetails = (element, info) => {
  //   setInputValues((prev) => {
  //     return {...prev, [info]: element}
  //   })
  // }

  const handleIndustryDetails = (element) => {
    setInputValues((prev) => {
      return { ...prev, industryCategory: element };
    });
    setErrorElement((prev) => {
              return {...prev, industryCategoryError: ""}
            })
  };

  return (
    <div className="flex flex-col">
      <div className="relative mb-6">
        <select
          className="border rounded-md p-2 cursor-pointer w-full"
          name="industryCategory"
          id="industryCategory"
          onChange={(e) => {
            handleIndustryDetails(e.target.value)
          }
        }
          value={industryCategory}
        >
          <option
            disabled=""
            hidden="Industry Category"
            value="Industry Category"
          >
            Industry Category
          </option>
          {IndCategory.map((item, index) => {
            // console.log(item)
            return (
              <option key={index} value={item}>
                {item}
              </option>
            );
          })}
          {/* <option disabled="" hidden="" value="">
            Industry Category
          </option>
          <option value="Banking Finance and Insurance">
            Banking Finance and Insurance
          </option>
          <option value="Computer IT Technology and Communication">
            Computer IT Technology and Communication
          </option>
          <option value="Construction and Real Estate">
            Construction and Real Estate
          </option>
          <option value="Manufacturing">Manufacturing</option>
          <option value="Medical and Pharmaceuticals">
            Medical and Pharmaceuticals
          </option>
          <option value="Services">Services</option>
          <option value="Retail and E-commerce">Retail and E-commerce</option>
          <option value="Automobiles and Electronics">
            Automobiles and Electronics
          </option>
          <option value="Home Lifestyle and Fitness">
            Home Lifestyle and Fitness
          </option>
          <option value="Others">Others</option> */}
        </select>
        <span className="text-sm text-red-400 absolute top-11 left-0">{errorElement.industryCategoryError}</span>
      </div>
      <div className="relative mb-6">
        <input
          className="border rounded-md p-2 w-full"
          placeholder="Sum Insured"
          type="number"
          value={sumInsured}
          onChange={(e) => {
            setInputValues((prev) => {
              return {...prev, sumInsured: e.target.value}
            })

            setErrorElement((prev) => {
              return {...prev, sumInsuredError: ""}
            })
          }}
        />
        <span className="text-sm text-red-400 absolute top-11 left-0">{errorElement.sumInsuredError}</span>
      </div>
      <div className="mb-4">
        <label>Registered in India?</label>
        <div className="flex gap-4">
          <div>
            <input
              className="cursor-pointer"
              id="yes"
              type="radio"
              checked={registeredInIndia === "Yes"}
              name="Yes"
              onChange={(e) => {
                setInputValues((prev) => {
                  return {...prev, registeredInIndia: e.target.name}
                });
              }}
            />
            <label htmlFor="yes">&nbsp;Yes</label>
          </div>
          <div>
            <input
              className="cursor-pointer"
              id="no"
              type="radio"
              name="No"
              checked={registeredInIndia === "No"}
              onChange={(e) => {
                setInputValues((prev) => {
                  return {...prev, registeredInIndia: e.target.name}
                });
              }}
            />
            <label htmlFor="no">&nbsp;No</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustryInfo;
