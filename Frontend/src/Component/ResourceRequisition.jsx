import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Select from "react-select";
// import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";

export const ResourceRequisition = () => {
  const [resourcedata, SetResourceData] = useState({});
  // console.log(resourcedata)

  const getdata=async()=>{
    const result=await axios.get("http://localhost:8080/viewDomains")
    const result1=await axios.get("http://localhost:8080/hiringtype/list-all-types")
    console.log(result)
    console.log(result1)
  }

  useEffect(()=>{
    getdata()
  },[])

  var [dyta,setDyta]=useState();
var handleSelect=(e)=>{
  setDyta(Array.isArray(e)?e.map(x=>x.label):[]);
}
// console.log(dyta);
  var educationqualification=[
    {
      value:1,
      label: "Graduation"
    },
    {
      value:2,
      label: "Post-Graduation"
    }
  ];
  
  var [developer,setDeveloper]=useState();
var handleTypeofDeveloper=(e)=>{
  setDeveloper(Array.isArray(e)?e.map(x=>x.label):[]);
}
// console.log(developer);
  var typeOfDeveloper=[
    {
      value:1,
      label: "Full Stack"
    },
    {
      value:2,
      label: "Front-End"
    },
    {
      value:3,
      label:"Back-End"
    },
    {
      value:4,
      label:"UI Designer"
      
    },
    {
      value:5,
      label:"Architect"
    },
    {
      value:6,
      label:"Business Analysts"
    }
  ];
 
  var [technology,setTechnology]=useState();
var handleTechnology=(e)=>{
  setTechnology(Array.isArray(e)?e.map(x=>x.label):[]);
}
// console.log(technology);
  var technologydata=[
    {
      value:1,
      label: "Full Stack"
    },
    {
      value:2,
      label: "Front-End"
    },
    {
      value:3,
      label:"Back-End"
    },
    {
      value:4,
      label:"UI Designer"
      
    },
    {
      value:5,
      label:"Architect"
    },
    {
      value:6,
      label:"Business Analysts"
    }
  ];
 
  var [technologyspec,setTechnologyspec]=useState();
var handleTechnologyspec=(e)=>{
  setTechnologyspec(Array.isArray(e)?e.map(x=>x.label):[]);
}
// console.log(technologyspec);
  var technologyspecdata=[
    {
      value:1,
      label: "Full Stack"
    },
    {
      value:2,
      label: "Front-End"
    },
    {
      value:3,
      label:"Back-End"
    },
    {
      value:4,
      label:"UI Designer"
      
    },
    {
      value:5,
      label:"Architect"
    },
    {
      value:6,
      label:"Business Analysts"
    }
  ];

  var [graduation,setGraduation]=useState();
var handlegraduation=(e)=>{
  setGraduation(Array.isArray(e)?e.map(x=>x.label):[]);
}
// console.log(graduation);
  var graduationdata=[
    {
      value:1,
      label: "B.E"
    },
    {
      value:2,
      label: "B.Tech"
    },
    {
      value:3,
      label:"B.Sc"
    },
    {
      value:4,
      label:"B.A"
      
    }
  ];
 
  var [postgraduation,setPostGraduation]=useState();
var handlepostgraduation=(e)=>{
  setPostGraduation(Array.isArray(e)?e.map(x=>x.label):[]);
}
// console.log(postgraduation);
  var postgraduationdata=[
    {
      value:1,
      label: "M.E"
    },
    {
      value:2,
      label: "M.Tech"
    },
    {
      value:3,
      label:"M.Sc"
    },
    {
      value:4,
      label:"M.A"
      
    }
  ];
 
  var [graduationspec,setGraduationspec]=useState();
var handlegraduationspec=(e)=>{
  setGraduationspec(Array.isArray(e)?e.map(x=>x.label):[]);
}
// console.log(graduationspec);
  var graduationspecdata=[
    {
      value:1,
      label: "Computer Science"
    },
    {
      value:2,
      label: "Electronics & Telecommunication"
    },
    {
      value:3,
      label:"Mechanical"
    },
    {
      value:4,
      label:"Civil"
    },
    {
      value:5,
      label: "Commerce"
    },
    {
      value:5,
      label: "Arts"
    }
  ];
  
  var [postgraduationspec,setPostGraduationspec]=useState();
var handlepostgraduationspec=(e)=>{
  setPostGraduationspec(Array.isArray(e)?e.map(x=>x.label):[]);
}
// console.log(postgraduationspec);
  var postgraduationspecdata=[
    {
      value:1,
      label: "Computer Science"
    },
    {
      value:2,
      label: "Electronics & Telecommunication"
    },
    {
      value:3,
      label:"Mechanical"
    },
    {
      value:4,
      label:"Civil"
    },
    {
      value:5,
      label: "Commerce"
    },
    {
      value:5,
      label: "Arts"
    }
  ]

    var [otherspecialization,setOtherspecialization]=useState();
var handleotherspecialization=(e)=>{
  setOtherspecialization(Array.isArray(e)?e.map(x=>x.label):[]);
}
// console.log(otherspecialization);
  var otherspecializationdata=[
    {
      value:1,
      label: "Electronics"
    },
    {
      value:2,
      label: "Mechanical"
    },
    {
      value:3,
      label:"Computer"
    }
  ];
   
  var [otherqualification,setOtherqualification]=useState();
var handleotherqualification=(e)=>{
  setOtherqualification(Array.isArray(e)?e.map(x=>x.label):[]);
}
// console.log(otherqualification);
  var otherqualificationdata=[
    {
      value:1,
      label: "10th"
    },
    {
      value:2,
      label: "12th"
    },
    {
      value:3,
      label:"Diploma"
    }
  ];
 
var [domain,setDomain]=useState();
var handledomain=(e)=>{
  setDomain(Array.isArray(e)?e.map(x=>x.label):[]);
}
// console.log(domain);
  var domaindata=[
    {
      value:1,
      label: "Banking"
    },
    {
      value:2,
      label: "Insurance"
    },
    {
      value:3,
      label:"Manufacturing"
    },
    {
      value:4,
      label:"Pharmaceutical"
    }
  ];


  const [Passport, setPassport] = useState(true);
  const [relocate, setRelocate] = useState(true)

  const [state, setState] = useState([]);
  const [city, setCity] = useState([]);

  const country = ["India", "USA", "Japan"];
  const India = ["Karnataka", "Maharastra", "TamilNadu"];
  const USA = ["California", "Texas", "Florida"];
  const Japan = ["Hokkaido", "Tohoku", "Kanto"];
  const Karnataka = ["Banglore"];
  const Maharastra = ["Pune", "Mumbai"];
  const TamilNadu = ["Chennai"];

  const handlecountry = (e) => {
    if (e.target.value === "India") {
      setState(India);
    }
    if (e.target.value === "USA") {
      setState(USA);
    }
    if (e.target.value === "Japan") {
      setState(Japan);
    }
    SetResourceData({ ...resourcedata, worklocationcountry: e.target.value });
  };
  const handlestate = (e) => {
    if (e.target.value === "Karnataka") {
      setCity(Karnataka);
    }
    if (e.target.value === "Maharastra") {
      setCity(Maharastra);
    }
    if (e.target.value === "TamilNadu") {
      setCity(TamilNadu);
    }
    SetResourceData({ ...resourcedata, worklocationstate: e.target.value });
  };

  return (
    <div className="container my-5">
      <div className="text-center">
        <h1 className="h1">Resourse Requirement</h1>
      </div>
      <div className="text-end">
        <span className="birla">birla</span>
        <span className="soft">soft</span>
      </div>
      <div className="row py-3">
        <div className="col">
          <form action="">

            <div className="form-group row">
              <lable className="col-sm-1 col-form-lable"></lable>
              <button className="col-sm-1 btn-outline-primary btn-sm ">
                NEW
              </button>
              <lable className="col-sm-4 col-form-lable"></lable>
              <lable className="col-sm-2 col-form-lable">
                Search Request No:
              </lable>
              <div className="col-sm-2">
                <input type="text" className="form-control form-control-sm" />
              </div>
              <button type="submit" className="col-sm-1 btn btn-primary btn-sm">
                <i className="fa fa-search"></i>
              </button>
            </div>
            <br />
            <div className="form-group row">
              <lable className="col-sm-1 col-form-lable"></lable>
              <lable className="col-sm-2 col-form-lable"> Employee Name:</lable>
              <div className="col-sm-3">
                <input
                  type="text"
                  className="form-control form-control-sm"
                  disabled
                  placeholder="Employee Name"
                  onChange={(e) =>
                    SetResourceData({
                      ...resourcedata,
                      employeename: e.target.value,
                    })
                  }
                />
              </div>
              <lable className="col-sm-2 col-form-lable">Created On:</lable>
              <div className="col-sm-3">
                <input
                  type="text"
                  className="form-control form-control-sm"
                  disabled
                  onChange={(e) =>
                    SetResourceData({
                      ...resourcedata,
                      employeename: e.target.value,
                    })
                  }
                />
              </div>
              <lable className="col-sm-1 col-form-lable"></lable>
            </div>
            <br />
            <div className="form-group row">
              <lable className="col-sm-1 col-form-lable"></lable>
              <lable className="col-sm-2 col-form-lable">Employee ID:</lable>
              <div className="col-sm-3">
                <input
                  type="text"
                  className="form-control form-control-sm"
                  disabled
                  placeholder="Employee ID"
                  onChange={(e) =>
                    SetResourceData({
                      ...resourcedata,
                      employeeid: e.target.value,
                    })
                  }
                />
              </div>
              <lable className="col-sm-2 col-form-lable">Years Of Exp:</lable>
              <div className="col-sm-3">
                <input
                  type="number"
                  className="form-control form-control-m"
                  onChange={(e) =>
                    SetResourceData({
                      ...resourcedata,
                      yearofexp: e.target.value,
                    })
                  }
                />
              </div>



              <lable className="col-sm-1 col-form-lable"></lable>
            </div>
            <br />
            <div className="form-group row">
              <lable className="col-sm-1 col-form-lable"></lable>
              <lable className="col-sm-2 col-form-lable">Hiring Type:</lable>
              <div className="col-sm-3"  >
                <select
                  class="form-select form-select-m"
                  onChange={(e) =>
                    SetResourceData({
                      ...resourcedata,
                      hiringtype: e.target.value,
                    })
                  }
                >
                  <option>Select Type </option>
                  <option>C2C</option>
                  <option>FCT</option>
                  <option>FTE</option>
                  <option>Pro-Active</option>

                </select>

              </div>
              <lable className="col-sm-2 col-form-lable">
                Type Of Developer:
              </lable>
              <div className="col-sm-3">
              <Select isMulti options={typeOfDeveloper} onChange={handleTypeofDeveloper}></Select>
              </div>
              <lable className="col-sm-1 col-form-lable"></lable>
            </div>
            <br />
            <div className="form-group row">
              <lable className="col-sm-1 col-form-lable"></lable>
              <lable className="col-sm-2 col-form-lable">Requested By:</lable>
              <div className="col-sm-3">
                <input
                  type="text"
                  className="form-control form-control-m"
                  disabled
                />

              </div>
              <lable className="col-sm-2 col-form-lable">Technology:</lable>
              <div className="col-sm-3">
              <Select isMulti options={technologydata} onChange={handleTechnology}></Select>               
              </div>

              <lable className="col-sm-1 col-form-lable"></lable>
            </div>
            <br />
            <div className="form-group row">
              <lable className="col-sm-1 col-form-lable"></lable>
              <lable className="col-sm-2 col-form-lable">
                Require Domain Knowledge:
              </lable>
              <div className="col-sm-3">
              <Select isMulti options={domaindata} onChange={handledomain}></Select> 
               
              </div>
              <lable className="col-sm-2 col-form-lable">
                Technology Specialization:
              </lable>
              <div className="col-sm-3">
              <Select isMulti options={technologyspecdata} onChange={handleTechnologyspec}></Select>
              </div>
              <lable className="col-sm-1 col-form-lable"></lable>
            </div>
            <br />
            <div className="form-group row">
              <lable className="col-sm-1 col-form-lable"></lable>
              <lable className="col-sm-2 col-form-lable">
                Work Location Country:
              </lable>
              <div className="col-sm-3">
                <select
                  class="form-select form-select-m"
                  onChange={handlecountry}
                >
                  <option>Select Country </option>
                  {country.map((item) => {
                    return (
                      <option value={item} key={item}>
                        {item}
                      </option>
                    );
                  })}
                </select>
              </div>
              <lable className="col-sm-2 col-form-lable">
                Education Qualification:
              </lable>
              <div className="col-sm-3">
                <Select isMulti options={educationqualification} onChange={handleSelect}></Select>
              </div>
              <lable className="col-sm-1 col-form-lable"></lable>
            </div>
            <br />
            <div className="form-group row">
              <lable className="col-sm-1 col-form-lable"></lable>
              <lable className="col-sm-2 col-form-lable">
                Work Location State:
              </lable>
              <div className="col-sm-3">
                <select
                  class="form-select form-select-m "
                  onChange={handlestate}
                >
                  <option>Select State </option>
                  {state.map((item) => {
                    return (
                      <option value={item} key={item}>
                        {item}
                      </option>
                    );
                  })}
                </select>
              </div>
              <lable className="col-sm-2 col-form-lable">Graduation:</lable>
              <div className="col-sm-3">
              <Select isMulti options={graduationdata} onChange={handlegraduation}></Select>
                
              </div>
              <lable className="col-sm-1 col-form-lable"></lable>
            </div>
            <br />
            <div className="form-group row">
              <lable className="col-sm-1 col-form-lable"></lable>
              <lable className="col-sm-2 col-form-lable">
                Work Location City:
              </lable>
              <div className="col-sm-3">
                <select
                  class="form-select form-select-m"
                  onChange={(e) =>
                    SetResourceData({
                      ...resourcedata,
                      worklocationcity: e.target.value,
                    })
                  }
                >
                  <option>Select City </option>
                  {city.map((item) => {
                    return (
                      <option value={item} key={item}>
                        {item}
                      </option>
                    );
                  })}
                </select>
              </div>
              <lable className="col-sm-2 col-form-lable">
                Graduation Specialization:
              </lable>
              <div className="col-sm-3">
              <Select isMulti options={graduationspecdata} onChange={handlegraduationspec}></Select>
               
              </div>
              <lable className="col-sm-1 col-form-lable"></lable>
            </div>
            <br />
            <div className="form-group row">
              <lable className="col-sm-1 col-form-lable"></lable>
              <lable className="col-sm-2 col-form-lable">
                Resource Available Date:
              </lable>
              <div className="col-sm-3">
                <input type="date" name="" id="" onChange={(e) => SetResourceData({ ...resourcedata, resourceavailabledate: e.target.value })} />
              </div>

              <lable className="col-sm-2 col-form-lable">
                Post-Graduation:
              </lable>
              <div className="col-sm-3">
              <Select isMulti options={postgraduationdata} onChange={handlepostgraduation}></Select>
              </div>
              <lable className="col-sm-1 col-form-lable"></lable>
            </div>
            <br />
            <div className="form-group row">
              <lable className="col-sm-1 col-form-lable"></lable>
              <lable className="col-sm-2 col-form-lable">
                Time Zone Of Shifts:
              </lable>
              <div className="col-sm-3">
                <select
                  class="form-select form-select-m"  
                  onChange={(e) =>
                    SetResourceData({
                      ...resourcedata,
                      timezone: e.target.value,
                    })
                  }>
                  <option>Select Time Zone </option>
                  <option>India</option>
                  <option>UK</option>
                  <option>USA</option>
                  <option>Japan</option>
                  
                </select>
              </div>

              <lable className="col-sm-2 col-form-lable">
                Post-Graduation Specialization:
              </lable>
              <div className="col-sm-3">
              <Select isMulti options={postgraduationspecdata} onChange={handlepostgraduationspec}></Select>
              </div>
              <lable className="col-sm-1 col-form-lable"></lable>
            </div>
            <br />
            <div className="form-group row">
              <lable className="col-sm-1 col-form-lable"></lable>
              <lable className="col-sm-2 col-form-lable">
                Require To Work In Shift:
              </lable>
              <div className="col-sm-1">
                <div class="form-check">
                  <input
                    type="radio"
                    class="form-check-input"
                    id="radio1"
                    name="shift"
                    value="option1"
                    onClick={(e) => SetResourceData({ ...resourcedata, requiredtoworkinshifts: e.target.value })}
                  />
                  <label class="form-check-label" for="radio1">
                    Yes
                  </label>
                </div>
              </div>
              <div className="col-sm-2">
                <div class="form-check">
                  <input
                    type="radio"
                    class="form-check-input"
                    id="radio1"
                    name="shift"
                    value="option1"
                  />
                  <label class="form-check-label" for="radio1">
                    No
                  </label>
                </div>
              </div>
              <lable className="col-sm-2 col-form-lable">
                Other Qualification:
              </lable>
              <div className="col-sm-3">
              <Select isMulti options={otherqualificationdata} onChange={handleotherqualification}></Select>
                
              </div>
              <lable className="col-sm-1 col-form-lable"></lable>
            </div>
            <br />
            <div className="form-group row">
              <lable className="col-sm-1 col-form-lable"></lable>
              <lable className="col-sm-2 col-form-lable">Passport:</lable>
              <div className="col-sm-1">
                <div class="form-check">
                  <input
                    type="radio"
                    class="form-check-input"
                    id="radio1"
                    name="pass"
                    value="option1"
                    onClick={() => setPassport(false)}
                  />
                  <label class="form-check-label" for="radio1">
                    Yes
                  </label>
                </div>
              </div>
              <div className="col-sm-2">
                <div class="form-check">
                  <input
                    type="radio"
                    class="form-check-input"
                    id="radio1"
                    name="pass"
                    value="option1"
                    onClick={() => setPassport(true)}
                  />
                  <label class="form-check-label" for="radio1">
                    No
                  </label>
                </div>
              </div>
              <lable className="col-sm-2 col-form-lable">
                Other Specialization:
              </lable>
              <div className="col-sm-3">
              <Select isMulti options={otherspecializationdata} onChange={handleotherspecialization}></Select>
              </div>
              
              <lable className="col-sm-1 col-form-lable"></lable>
            </div>
            <br />
            <div className="form-group row">
              <lable className="col-sm-1 col-form-lable"></lable>
              <lable className="col-sm-2 col-form-lable">VISA Available:</lable>
              <div className="col-sm-1">
                <div class="form-check">
                  <input
                    type="radio"
                    class="form-check-input"
                    id="radio1"
                    name="visa"
                    value="option1"
                    disabled={Passport}
                    onClick={(e) => SetResourceData({ ...resourcedata, visaavailable: e.target.value })}
                  />
                  <label class="form-check-label" for="radio1">
                    Yes
                  </label>
                </div>
              </div>
              <div className="col-sm-2">
                <div class="form-check">
                  <input
                    type="radio"
                    class="form-check-input"
                    id="radio1"
                    name="visa"
                    value="option1"
                    disabled={Passport}
                  />
                  <label class="form-check-label" for="radio1">
                    No
                  </label>
                </div>
              </div>
               <lable className="col-sm-2 col-form-lable">*Positions: </lable>
              <div className="col-sm-1">
                <input
                  type="text"
                  className="form-control form-control-sm"
                  required
                  onChange={(e) =>
                    SetResourceData({
                      ...resourcedata,
                      position: e.target.value
                    })
                  }
                />
              </div>
              
              <lable className="col-sm-3 col-form-lable"></lable>
            </div>
            <br />
            <div className="form-group row">
              <lable className="col-sm-1 col-form-lable"></lable>
              <lable className="col-sm-2 col-form-lable">
                Approver Employee ID:
              </lable>

              <div className="col-sm-2">
                <input type="text" className="form-control form-control-sm" />
              </div>
              <lable className="col-sm-1 col-form-lable"></lable>
              <lable className="col-sm-2 col-form-lable">Sales Order No:</lable>
              <div className="col-sm-2">
                <input type="text" className="form-control form-control-sm" 
                onChange={(e) =>
                  SetResourceData({
                    ...resourcedata,
                    salesorderno: e.target.value,
                  })
                }/>
              </div>
              
              <lable className="col-sm-1 col-form-lable"></lable>
            </div>
            <br />
            <div className="form-group row">
              <lable className="col-sm-1 col-form-lable"></lable>
              <lable className="col-sm-2 col-form-lable">
                Approver Employee Name:
              </lable>
              <div className="col-sm-3">
                <input type="text" className="form-control form-control-sm" />
              </div>
              <lable className="col-sm-2 col-form-lable">JRs No:</lable>
              <div className="col-sm-1">
                <input type="text" className="form-control form-control-sm" />
              </div>
             
              <lable className="col-sm-1 col-form-lable"></lable>
            </div>
            <br />
            <div className="form-group row">
              <lable className="col-sm-1 col-form-lable"></lable>
              <lable className="col-sm-2 col-form-lable">Approved on:</lable>
              <div className="col-sm-2">
                <input
                  type="text"
                  className="form-control form-control-sm"
                  disabled
                />
              </div>
              <lable className="col-sm-1 col-form-lable"></lable>

               <lable className="col-sm-2 col-form-lable">
                Ready To Relocate:
              </lable>
              <div className="col-sm-1">
                <div class="form-check">
                  <input
                    type="radio"
                    class="form-check-input"
                    id="radio1"
                    name="abc"
                    value="option1"
                    onClick={() => setRelocate(true)}
                  />
                  <label class="form-check-label" for="radio1">
                    Yes
                  </label>
                </div>
              </div>
              <div className="col-sm-2">
                <div class="form-check">
                  <input
                    type="radio"
                    class="form-check-input"
                    id="radio1"
                    name="abc"
                    value="option1"
                    onClick={() => setRelocate(false)}
                  />
                  <label class="form-check-label" for="radio1">
                    No
                  </label>
                </div>
              </div>
              <lable className="col-sm-1 col-form-lable"></lable>
            </div>
            <br />
            <div className="form-group row">
              <lable className="col-sm-1 col-form-lable"></lable>
             <lable className="col-sm-2 col-form-lable">
                Attach JD Document:
              </lable>
              <div className="col-sm-3">
                <div className="custom-file-input">
                  <input
                    type="file"
                    name=""
                    id=""
                    className="custom-control-file custom file lable"
                  />
                </div>
              </div>
              {/* <lable className="col-sm-1 col-form-lable"></lable> */}

              <lable className="col-sm-2 col-form-lable">
                If No To Relocate/Days:
              </lable>
              <div className="col-sm-1">
                <input type="number" className="form-control form-control-sm" disabled={relocate} 
                onChange={(e) =>
                  SetResourceData({
                    ...resourcedata,
                    relocateindays: e.target.value,
                  })
                }/>
              </div>
              <lable className="col-sm-1 col-form-lable"></lable>
            </div>
            <br />

            <br />
            <div className="form-group row">
              <lable className="col-sm-2 col-form-lable"></lable>
              <button className="col-sm-1 btn-outline-warning btn-sm ">
                SAVE
              </button>
              <lable className="col-sm-1 col-form-lable"></lable>
              <button className="col-sm-1 btn-outline-success btn-sm ">
                Submit
              </button>
              <lable className="col-sm-4 col-form-lable"></lable>
              <button className="col-sm-1 btn-outline-danger btn-sm ">
                Delete
              </button>
            </div>
            <br />
          </form>
        </div>
      </div>
    </div>
  );
};
