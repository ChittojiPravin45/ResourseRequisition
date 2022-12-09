import axios from "axios";
import React from "react";
import Swal from "sweetalert2"
import { useEffect } from "react";
import { useState } from "react";
import Select from "react-select";

export const ResourceRequisition = () => {
  const employeedata=JSON.parse(sessionStorage.getItem("logindata"))

  const [resourcedata, SetResourceData] = useState({});
  const [selectedList, setSelectedList] = useState([]);
  useEffect(()=>{},[selectedList])
  const handleChange = async (e) => {
      let { options } = e.target;
      options = Array.apply(null, options)
      const selectedValues = options.filter(x => x.selected).map(x => x.value);
      setSelectedList(selectedValues);
     
  
  }
  const handleTech=async()=>{
    const param = {
      resources: selectedList
    };
    var str="";
    let str1= "";
    
    for(let i=0;i<selectedList.length;i++){
      str1=str1.concat(selectedList[i]);
      str=str.concat(selectedList[i]);
      str1=str1.concat("|");
      str=str.concat(" ");
}

const res=await  axios.get(`http://localhost:8080/api/viewTechnology/${str}`);
setTechnologydata(res.data);
SetResourceData({ ...resourcedata, technologyData: str1 });

  }
  useEffect(()=>{
    
    handleTech()
  },[selectedList])

  const [techSpecialization, setTechSpecialization] = useState([]);
  const handleTechnologySpecialization = (e) => {
    let { options } = e.target;
    options = Array.apply(null, options)
    const selectedValues = options.filter(x => x.selected).map(x => x.value);
    console.log(selectedValues)
    setTechSpecialization(selectedValues);
  
    let str1 = "";
    for(let i=0;i<selectedTechnology.length;i++){
      str1=str1.concat(selectedTechnology[i]);
      str1=str1.concat("|");
    }

    SetResourceData({ ...resourcedata, skills: str1 });
  }

  console.log(resourcedata);
  const [selectedTechnology, setSelectedTechnology] = useState([]);
  const [skillData, setSkillData]=useState([]);
  // console.log(resourcedata)
  const [viewDomainsdata, setViewDomainsdata] = useState([]);
  const [hiringTypedata, setHiringTypedata] = useState([]);
  const [countrydata, setCountryData] = useState([]);
  const [qualification, setQualification] = useState([]);
  const [graduationdata, setGraduationdata] = useState([]);
  const [graduationspecialization, setGraduationspecialization] = useState([]);
  const [postgraduationdata, setPostGraduationdata] = useState([]);
  const [postgraduationspecialization, setPostGraduationspecialization] =
    useState([]);
 
  const [employee, setEmployee] = useState([]);
  const [technologyData, setTechnologydata] =
    useState([]);

  const getdata = async () => {
    const result = await axios.get("http://localhost:8080/api/viewdomains");
    setViewDomainsdata(result.data);
    
    const result1 = await axios.get("http://localhost:8080/api/hiringType");
    console.log("hiringType------->"+result1)
    setHiringTypedata(result1.data);
    const result2 = await axios.get("http://localhost:8080/api/country");
    setCountryData(result2.data);
    
    
  
  }
   
   const [resourcetype,setResourceType]=useState([])
  const getresource=async()=>{
    const res = await axios.get("http://localhost:8080/api/viewResource");
    setResourceType(res.data);
    // console.log(res.data)

  }
  const getqualification=async()=>{
    const result3 = await axios.get("http://localhost:8080/api/qualification");
    setQualification(result3.data);
  }

  
  useEffect(() => {
    getdata();
    getresource()
    getqualification()
  }, []);

  var [data, setData] = useState();
  var handlequalification = async(e) => {
    const result4 = await axios.get("http://localhost:8080/api/viewQualificationDegree/1");
    setGraduationdata(result4.data);

    const result6 = await axios.get(`http://localhost:8080/api/viewQualificationDegree/2`);
    setPostGraduationdata(result6.data);
    setData(Array.isArray(e) ? e.map((x) => x.label) : []);
    SetResourceData({ ...resourcedata, qualification: {qualificationId:e.target.value} });
  };
  // console.log(data);

  var [developer, setDeveloper] = useState();

   
  // const handleChange = e => {
    
  //   let { options } = e.target.id;
  //   console.log("options",options) ;
  //   options = Array.apply(null, options)
  //   const selectedValues = options.filter(x => x.selected).map(x => x.value);
  //   setSelectedList(selectedValues);
  // }

  const handleTypeofDeveloper =async (e) => {
    let { options } = e.target;
    
    options = Array.apply(null, options)
    const selectedValues = options.filter(x => x.selected).map(x => x.value);
    setSelectedList(selectedValues);
    
    alert("2");
    let id = e.target.value;
    alert("id "+id);
   // const res = await axios.get(`http://localhost:8080/api/viewTechnology/${id}`);
    //setTechnologydata(res.data);
   
  
    setDeveloper(Array.isArray(e) ? e.map((x) => x.label) : []);
    SetResourceData({ ...resourcedata, resource: e.target.value });

  };
  // console.log(developer);
  // const typeOfDeveloper = [{ value: 1, label: "Full Stack" }];

  
  // var handleTechnology = (e) => { 
  // };
  var handleTechnology = async (e) => {
    let { options } = e.target;
    options = Array.apply(null, options)
    const selectedValues = options.filter(x => x.selected).map(x => x.value);
    
    setSelectedTechnology(selectedValues);
    
  
  
  };
  const getskill=async()=>{
    const param = {
      resources: selectedTechnology
    };
    var str="";
    let str1 = "";
    for(let i=0;i<selectedTechnology.length;i++){
      str=str.concat(selectedTechnology[i]);
      str1=str1.concat(selectedTechnology[i]);
      str1=str1.concat("|");
      str=str.concat(" ");
  }
  
  const res=await  axios.get(`http://localhost:8080/api/viewSkills/${str}`);
  setSkillData(res.data);
  SetResourceData({ ...resourcedata, technologies: str1 });
  }
  useEffect(()=>{
    getskill()
  },[selectedTechnology])
  // console.log(technology);
  // const technologydata = [{ value: 1, label: "Java" }];

  var [technologyspec, setTechnologyspec] = useState();
  var handleTechnologyspec = (e) => {
    setTechnologyspec(Array.isArray(e) ? e.map((x) => x.label) : []);
  };
  // console.log(technologyspec);
  const technologyspecdata = [{ value: 1, label: "Java" }];

  var [graduation, setGraduation] = useState();
  var handlegraduation = async(e) => {
    let id = e.target.value;
    const result5 = await axios.get(`http://localhost:8080/api/viewQualificationSpecialization/${id}`);
    setGraduationspecialization(result5.data);

    setGraduation(Array.isArray(e) ? e.map((x) => x.label) : []);
    SetResourceData({ ...resourcedata, qualificationDegree: {degreeId:e.target.value} });
  };
  // console.log(graduation);

  var [postgraduation, setPostGraduation] = useState();
  var handlepostgraduation = async (e) => {
    let id = e.target.value;
    const result7 = await axios.get(`http://localhost:8080/api/viewQualificationSpecialization/${id}`);
    setPostGraduationspecialization(result7.data);
    setPostGraduation(Array.isArray(e) ? e.map((x) => x.label) : []);
    SetResourceData({ ...resourcedata, qualificationDegree:{degreeId: e.target.value} });
  };
  // console.log(postgraduation);

  var [graduationspec, setGraduationspec] = useState();
  var handlegraduationspec = (e) => {
    console.log(e.target.value)
    console.log(graduationspec)
    setGraduationspec(Array.isArray(e) ? e.map((x) => x.label) : []);
    SetResourceData({ ...resourcedata, qualificationSpecialization: {specializationId:e.target.value} });
  };
  // console.log(graduationspec);

  var [postgraduationspec, setPostGraduationspec] = useState();
  var handlepostgraduationspec = (e) => {
    setPostGraduationspec(Array.isArray(e) ? e.map((x) => x.label) : []);
    SetResourceData({ ...resourcedata, qualificationSpecialization:{specializationId: e.target.value }});
  };

  var handleotherspecialization = (e) => {
    SetResourceData({ ...resourcedata, othergraduationSpec: e.target.value });
  };

  var handleotherqualification = (e) => {
    SetResourceData({ ...resourcedata, othergraduationDegree: e.target.value });
  };

  var [domain, setDomain] = useState();
  var handledomain = (e) => {
    let { options } = e.target;
    options = Array.apply(null, options)
    const selectedValues = options.filter(x => x.selected).map(x => x.value);
    setDomain(selectedValues)
    let str1= "";
      for(let i=0;i<domain.length;i++){
        str1=str1.concat(domain[i]);
        str1=str1.concat("|");
      }

      SetResourceData({ ...resourcedata, domainKnowledges: str1 });
  };
  

  const [Passport, setPassport] = useState(true);
  const [relocate, setRelocate] = useState(true);

  const [statedata, setStatedata] = useState([]);
  const handlecountry = async (e) => {
    let id = e.target.value;
    
    const countryresult = await axios.get(
      `http://localhost:8080/api/country/state/${id}`
    );
    setStatedata(countryresult.data);
    SetResourceData({ ...resourcedata, country: {countryId:e.target.value} });
  };

  const [citydata, setCitydata] = useState([]);
  const handlestate = async (e) => {
    let id = e.target.value;
    const stateresult = await axios.get(
      `http://localhost:8080/api/country/state/city/${id}`
    );
    setCitydata(stateresult.data);
    SetResourceData({ ...resourcedata, state: {stateId:e.target.value} });
  };
  console.log(resourcedata)
  const [alertsubmit,setAlertsubmit]=useState(false)
  const handlesubmit = (e) => {
    let eid=employeedata.employeeId
    // let uid=employeedata.unitId
    // let uname=employeedata.unitName
    // let aid=employeedata.managerId
    
    SetResourceData({...resourcedata,employee:{employeeId:eid} });
    // SetResourceData({...resourcedata,unitId:uid});
    // SetResourceData({...resourcedata,unitName:uname});
    // SetResourceData({...resourcedata,approverId:aid});
    e.preventDefault();
    const resourceResult = axios.post(`http://localhost:8080/api/saveResourceRequirement/0`, resourcedata );
      setAlertsubmit(true)
      Swal.fire({
        title:"Submitted successfully",
        text:"Thank you",
        type:"success"
      })
      // console.log("resourceResult save" ,resourcedata);
//     localStorage.setItem(
//       "resourcerequisitiondata",
//       // JSON.stringify(resourcedata)
// );
  };

  const handlesave=async()=>{
    let eid=employeedata.employeeId
    SetResourceData({...resourcedata,employee:{employeeId:eid} });

    const submitresult=await axios.post(`http://localhost:8080/api/saveTempResourceRequirement/0`,resourcedata)
    // console.log(submitresult)
  }
  const [experience,setExperience]=useState()
  const [saleorder,setSaleorder]=useState()
  const [jrno,setJrno]=useState()
  const saved=JSON.parse(sessionStorage.getItem("savedData"))
  let exp=saved[0].experience
  
  function setdata(){
    setExperience(exp)
    setSaleorder(saved[0].salesOrderNo)
    setJrno(saved[0].noOfJRs)
  }
  useEffect(()=>{
    setdata()
  },[])
  //noOfJRs
  const handleExp=(e)=>{

    e.preventDefault();
    setExperience(e.target.value)
    SetResourceData({
      ...resourcedata,
      experience: e.target.value,
    })
    
  }
  const handleSaleorder=(e)=>{

    e.preventDefault();
    setSaleorder(e.target.value)
    SetResourceData({
      ...resourcedata,
      salesOrderNo: e.target.value,
    })
    
  }
  const handleJrno=(e)=>{

    e.preventDefault();
    setJrno(e.target.value)
    SetResourceData({
      ...resourcedata,
      noOfJRs: e.target.value,
    })
    
  }
  
  console.log(resourcedata)
  // let experience=saved[0].experience
  // console.log(experience)
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
              <label className="col-sm-1 col-form-lable"></label>
              <button className="col-sm-1 btn-outline-primary btn-sm ">
                NEW
              </button>
              <label className="col-sm-4 col-form-lable"></label>
              <label className="col-sm-2 col-form-lable">
                Search Request No:
              </label>
              <div className="col-sm-2">
                <input type="text" className="form-control form-control-sm" />
              </div>
              <button type="submit" className="col-sm-1 btn btn-primary btn-sm">
                <i className="fa fa-search"></i>
              </button>
            </div>
            <br />
            <div className="form-group row">
              <label className="col-sm-1 col-form-lable"></label>
              <label className="col-sm-2 col-form-lable"> Employee Name:</label>
              <div className="col-sm-3">
                <input
                  type="text"
                  className="form-control form-control-sm"
                  disabled
                  value={employeedata.employeeName}
                  placeholder={employee.employeeName}
                  onChange={(e) =>
                    SetResourceData({
                      ...resourcedata,
                      employeename: e.target.value,
                    })
                  }
                />
              </div>
              <label className="col-sm-2 col-form-lable">Created On:</label>
              <div className="col-sm-3">
                <input
                  type="date"
                  className="form-control form-control-sm"
                  disabled
                  onChange={(e) =>
                    SetResourceData({
                      ...resourcedata,
                      createdOn: e.target.value,
                    })
                  }
                />
              </div>
              <label className="col-sm-1 col-form-lable"></label>
            </div>
            <br />
            <div className="form-group row">
              <label className="col-sm-1 col-form-lable"></label>
              <label className="col-sm-2 col-form-lable">Employee ID:</label>
              <div className="col-sm-2">
                <input
                  type="number"
                  className="form-control form-control-sm"
                  disabled
                  value={employeedata.employeeId}
                  onChange={(e) =>
                    SetResourceData({
                      ...resourcedata,
                      employee: e.target.value,
                    })
                  }
                />
              </div>
              <label className="col-sm-1 col-form-lable"></label>

              <label className="col-sm-2 col-form-lable">Years Of Exp:</label>
              <div className="col-sm-1">
                <input
                  type="number"
                  value={experience}
                  className="form-control form-control-m"
                  onChange={handleExp} />
              </div>

              <label className="col-sm-3 col-form-lable"></label>
            </div>
            <br />
            <div className="form-group row">
              <label className="col-sm-1 col-form-lable"></label>
              <label className="col-sm-2 col-form-lable">Hiring Type:</label>
              <div className="col-sm-3">
                <select
                  className="form-select form-select-m"
                  onChange={(e) =>
                    SetResourceData({
                      ...resourcedata,
                      hiringType: {hiringTypeId:e.target.value},
                    })
                  }
                >
                  <option>Select Type </option>
                  {hiringTypedata.map((item) => {
                    return (
                      <option value={item.hiringTypeId}>
                        {item.hiringType}
                      </option>
                    );
                  })}
                </select>
              </div>
              <label className="col-sm-2 col-form-lable">
                Type Of Developer:
              </label>
              <div className="col-sm-3">
              {/* <Select isMulti options={resourcetype.map((item) => ({
                    value: item.resourceTypeId,
                    label: item.resourceType,
                  }))}
                  onChange={handleChange}
                ></Select> */}
                <select multiple name="list-box" onChange={handleChange} className="selectdeveloper" >
                {resourcetype.map((item) => {
                  return  <option id={item.resourceTypeId} value={item.resourceTypeId}>
                            {item.resourceType}
                          </option>
                })}
              </select>
              <br /><br />
              </div>
              <label className="col-sm-1 col-form-lable"></label>
            </div>
            <br />
            <div className="form-group row">
              <label className="col-sm-1 col-form-lable"></label>
              <label className="col-sm-2 col-form-lable">Requested By:</label>
              <div className="col-sm-3">
                <input
                  type="text"
                  className="form-control form-control-m"
                  disabled
                  value={employeedata.unitName}
                />
              </div>
              <label className="col-sm-2 col-form-lable">Technology:</label>
              <div className="col-sm-3">
                {/* <Select
                  isMulti
                  options={technologyData.map((item)=>({value:item.technologyId,label:item.technology}))}
                  onChange={handleTechnology}
                ></Select> */}
                 <select multiple name="list-box" onChange={handleTechnology} className="selectdeveloper">
                {technologyData.map((item) => {
                  return  <option id={item.technology} value={item.technologyId}>
                            {item.technology}
                          </option>
                })}
              </select>
              </div>

              <label className="col-sm-1 col-form-lable"></label>
            </div>
            <br />
            <div className="form-group row">
              <label className="col-sm-1 col-form-lable"></label>
              <label className="col-sm-2 col-form-lable">
                Require Domain Knowledge:
              </label>
              <div className="col-sm-3">
                
                <select multiple name="list-box" onChange={handledomain} className="selectdeveloper">
                {viewDomainsdata.map((item) => {
                  return  <option id={item.domainKnowledge} value={item.domainKnowledge}>
                            {item.domainKnowledge}
                          </option>
                })}
              </select>
              </div>
              <label className="col-sm-2 col-form-lable">
                Technology Specialization:
              </label>
              <div className="col-sm-3">
                {/* <Select
                  isMulti
                  // options={skillData.map((item) => ({
                  //   value: item.skillId,
                  //   label: item.skill,
                  // }))}
                  onChange={handleTechnology}
                ></Select> */}
                <select multiple name="list-box" onChange={handleTechnologySpecialization} className="selectdeveloper">
                {skillData.map((item) => {
                  return  <option id={item.skillId} value={item.skillId}>
                            {item.skill}
                          </option>
                })}
              </select>
              </div>
              <label className="col-sm-1 col-form-lable"></label>
            </div>
            <br />
            <div className="form-group row">
              <label className="col-sm-1 col-form-lable"></label>
              <label className="col-sm-2 col-form-lable">
                Work Location Country:
              </label>
              <div className="col-sm-3">
                <select
                  className="form-select form-select-m"
                  onChange={handlecountry}
                >
                  <option>Select Country </option>
                  {countrydata.map((item) => {
                    return (
                      <option value={item.countryId}  key={item.countryId}>
                        {item.countryName}
                      </option>
                    );
                  })}
                </select>
              </div>
              <label className="col-sm-2 col-form-lable">
                Education Qualification:
              </label>
              <div className="col-sm-3">
              <select
                  className="form-select form-select-m"
                  onClick={handlequalification}
                >
                  <option>Select Qualification </option>
                  {qualification.map((item) => {
                    return (
                      <option value={item.qualificationId}  key={item.qualificationId}>
                        {item.qualification}
                      </option>
                    );
                  })}
                </select>
                {/* <Select
                  options={qualification.map((item) => ({
                    value: item.qualification,
                    label: item.qualification,
                  }))}
                  onClick={handlequalification}
                ></Select> */}
              </div>
              <label className="col-sm-1 col-form-lable"></label>
            </div>
            <br />
            <div className="form-group row">
              <label className="col-sm-1 col-form-lable"></label>
              <label className="col-sm-2 col-form-lable">
                Work Location State:
              </label>
              <div className="col-sm-3">
                <select
                  className="form-select form-select-m "
                  onChange={handlestate}
                >
                  <option>Select State </option>
                  {statedata.map((item) => {
                    return (
                      <option value={item.stateId} key={item.stateId}>
                        {item.stateName}
                      </option>
                    );
                  })}
                </select>
              </div>
              <label className="col-sm-2 col-form-lable">Graduation:</label>
              <div className="col-sm-3">
                {/* <Select
                  isMulti
                  options={graduationdata.map((item) => ({
                    value: item.degreeId,
                    label: item.degreeName,
                  }))}
                  onChange={handlegraduation}
                ></Select> */}
                <select
                  className="form-select form-select-m "
                  onChange={handlegraduation}
                >
                  <option>Select Graduation </option>
                  {graduationdata.map((item) => {
                    return (
                      <option value={item.degreeId} key={item.degreeId}>
                        {item.degreeName}
                      </option>
                    );
                  })}
                </select>
              </div>
              <label className="col-sm-1 col-form-lable"></label>
            </div>
            <br />
            <div className="form-group row">
              <label className="col-sm-1 col-form-lable"></label>
              <label className="col-sm-2 col-form-lable">
                Work Location City:
              </label>
              <div className="col-sm-3">
                <select
                  className="form-select form-select-m"
                  onChange={(e) =>
                    SetResourceData({
                      ...resourcedata,
                      city: {cityId:e.target.value},
                    })
                  }
                >
                  <option>Select City </option>
                  {citydata.map((item) => {
                    return (
                      <option value={item.cityId} key={item.cityId}>
                        {item.cityName}
                      </option>
                    );
                  })}
                </select>
              </div>
              <label className="col-sm-2 col-form-lable">
                Graduation Specialization:
              </label>
              <div className="col-sm-3">
              <select
                  className="form-select form-select-m"
                  onChange={handlegraduationspec}
                  multiple
                >
                  <option>Select Specialization </option>
                  {graduationspecialization.map((item) => {
                    return (
                      <option value={item.specializationId} key={item.specializationId}>
                        {item.specializationName}
                      </option>
                    );
                  })}
                </select>
                 {/* <Select
                  isMulti
                  options={graduationspecialization.map((item) => ({
                    value: item.specializationId,
                    label: item.specializationName,
                  }))}
                  onClick={handlegraduationspec}
                ></Select> */}
              </div>
              <label className="col-sm-1 col-form-lable"></label>
            </div>
            <br />
            <div className="form-group row">
              <label className="col-sm-1 col-form-lable"></label>
              <label className="col-sm-2 col-form-lable">
                Resource Available Date:
              </label>
              <div className="col-sm-3">
                <input
                  type="date"
                  
                  onChange={(e) =>
                    SetResourceData({
                      ...resourcedata,
                      availabilityDate: e.target.value,
                    })
                  }
                />
              </div>

              <label className="col-sm-2 col-form-lable">
                Post-Graduation:
              </label>
              <div className="col-sm-3">
                {/* <Select
                  isMulti
                  options={postgraduationdata.map((item) => ({
                    value: item.degreeId,
                    label: item.degreeName,
                  }))}
                  onChange={handlepostgraduation}
                ></Select> */}
                <select
                  className="form-select form-select-m"
                  onChange={handlepostgraduation}
                >
                  <option>Select Post graduation </option>
                  {postgraduationdata.map((item) => {
                    return (
                      <option value={item.degreeId} key={item.degreeId}>
                        {item.degreeName}
                      </option>
                    );
                  })}
                </select>
              </div>

              <label className="col-sm-1 col-form-lable"></label>
            </div>
            <br />
            <div className="form-group row">
              <label className="col-sm-1 col-form-lable"></label>
              <label className="col-sm-2 col-form-lable">
                Time Zone Of Shifts:
              </label>
              <div className="col-sm-3">
                <select
                  className="form-select form-select-m"
                  onChange={(e) =>
                    SetResourceData({
                      ...resourcedata,
                      timezone: e.target.value,
                    })
                  }
                >
                  <option>Select Time Zone </option>
                  <option>India</option>
                  <option>UK</option>
                  <option>USA</option>
                  <option>Japan</option>
                </select>
              </div>

              <label className="col-sm-2 col-form-lable">
                Post-Graduation Specialization:
              </label>
              <div className="col-sm-3">
              <select
                  className="form-select form-select-m"
                  onChange={handlepostgraduationspec}
                  multiple
                >
                  <option>Select Specialization </option>
                  {postgraduationspecialization.map((item) => {
                    return (
                      <option value={item.specializationId} key={item.specializationId}>
                        {item.specializationName}
                      </option>
                    );
                  })}
                </select>
                {/* <Select
                  isMulti
                  options={postgraduationspecialization.map((item) => ({
                    value: item.specializationId,
                    label: item.specializationName,
                  }))}
                  onClick={handlepostgraduationspec}
                ></Select> */}
              </div>

              <label className="col-sm-1 col-form-lable"></label>
            </div>
            <br />
            <div className="form-group row">
              <label className="col-sm-1 col-form-lable"></label>
              <label className="col-sm-2 col-form-lable">
                Require To Work In Shift:
              </label>
              <div className="col-sm-1">
                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="radio1"
                    name="shift"
                    value="option1"
                    
                  />
                  <label className="form-check-label" htmlFor="radio1">
                    Yes
                  </label>
                </div>
              </div>
              <div className="col-sm-2">
                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="radio1"
                    name="shift"
                    value="option1"
                  />
                  <label className="form-check-label" htmlFor="radio1">
                    No
                  </label>
                </div>
              </div>
              <label className="col-sm-2 col-form-lable">
                Other Qualification:
              </label>
              <div className="col-sm-3">
                <input type="text" onChange={handleotherqualification} 
                />
                {/* <Select
                  isMulti
                  options={othergraduationdata.map((item) => ({
                    value: item.othergraduationId,
                    label: item.othergraduationName,
                  }))}
                  onChange={handleotherqualification}
                ></Select> */}
              </div>
              <label className="col-sm-1 col-form-lable"></label>
            </div>
            <br />
            <div className="form-group row">
              <label className="col-sm-1 col-form-lable"></label>
              <label className="col-sm-2 col-form-lable">Passport:</label>
              <div className="col-sm-1">
                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="radio1"
                    name="pass"
                    value="option1"
                    onClick={() => setPassport(false)}
                    onChange={(e) =>
                      SetResourceData({
                        ...resourcedata,
                        passportStatus:true,
                      })}
                  />
                  <label className="form-check-label" htmlFor="radio1">
                    Yes
                  </label>
                </div>
              </div>
              <div className="col-sm-2">
                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="radio1"
                    name="pass"
                    value="option1"
                    onClick={() => setPassport(true)}
                    onChange={(e) =>
                      SetResourceData({
                        ...resourcedata,
                        passportStatus:false,
                      })}
                  />
                  <label className="form-check-label" htmlFor="radio1">
                    No
                  </label>
                </div>
              </div>
              <label className="col-sm-2 col-form-lable">
                Other Specialization:
              </label>
              <div className="col-sm-3">
                <input type="text"  onChange={handleotherspecialization} />
                {/* <Select
                  isMulti
                  options={othergraduationspecialization.map((item) => ({
                    value: item.otherId,
                    label: item.otherName,
                  }))}
                  onChange={handleotherspecialization}
                ></Select> */}
              </div>

              <label className="col-sm-1 col-form-lable"></label>
            </div>
            <br />
            <div className="form-group row">
              <label className="col-sm-1 col-form-lable"></label>
              <label className="col-sm-2 col-form-lable">VISA Available:</label>
              <div className="col-sm-1">
                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="radio1"
                    name="visa"
                    value="option1"
                    disabled={Passport}

                    onChange={(e) =>
                      SetResourceData({
                        ...resourcedata,
                        visa:true,
                      })}
                  />
                  <label className="form-check-label" htmlFor="radio1">
                    Yes
                  </label>
                </div>
              </div>
              <div className="col-sm-2">
                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="radio1"
                    name="visa"
                    value="option1"
                    disabled={Passport}
                    onChange={(e) =>
                      SetResourceData({
                        ...resourcedata,
                        visa:false,
                      })}
                  />
                  <label className="form-check-label" htmlFor="radio1">
                    No
                  </label>
                </div>
              </div>
              <label className="col-sm-2 col-form-lable">*Positions: </label>
              <div className="col-sm-1">
                <input
                  type="number"
                  className="form-control form-control-sm"
                  required
                  onChange={(e) =>
                    SetResourceData({
                      ...resourcedata,
                      positions: e.target.value,
                    })
                  }
                />
              </div>

              <label className="col-sm-3 col-form-lable"></label>
            </div>
            <br />
            <div className="form-group row">
              <label className="col-sm-1 col-form-lable"></label>
              <label className="col-sm-2 col-form-lable">
                Approver Employee ID:
              </label>

              <div className="col-sm-2">
                <input type="text" className="form-control form-control-sm"
                value={employeedata.managerId}
                


                disabled/>
              </div>
              <label className="col-sm-1 col-form-lable"></label>
              <label className="col-sm-2 col-form-lable">Sales Order No:</label>
              <div className="col-sm-2">
                <input
                  type="number"
                  className="form-control form-control-sm"
                  value={saleorder}
                  onChange={handleSaleorder}
                />
              </div>

              <label className="col-sm-1 col-form-lable"></label>
            </div>
            <br />
            <div className="form-group row">
              <label className="col-sm-1 col-form-lable"></label>
              <label className="col-sm-2 col-form-lable">
                Approver Employee Name:
              </label>
              <div className="col-sm-3">
                <input type="text" className="form-control form-control-sm"
                 value={employeedata.managerName}

                disabled/>
              </div>
              <label className="col-sm-2 col-form-lable">JRs No:</label>
              <div className="col-sm-1">
                <input type="number" className="form-control form-control-sm" 
                onChange={handleJrno}
                value={jrno}
                  />
              </div>

              <label className="col-sm-1 col-form-lable"></label>
            </div>
            <br />
            <div className="form-group row">
              <label className="col-sm-1 col-form-lable"></label>
              <label className="col-sm-2 col-form-lable">Approved on:</label>
              <div className="col-sm-2">
                <input
                  type="date"
                  className="form-control form-control-sm"
                  onChange={(e) =>
                    SetResourceData({
                      ...resourcedata,
                      approvedDate: e.target.value,
                    })}
                  // disabled
                />
              </div>
              <label className="col-sm-1 col-form-lable"></label>

              <label className="col-sm-2 col-form-lable">
                Ready To Relocate:
              </label>
              <div className="col-sm-1">
                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="radio1"
                    name="abc"
                    value="option1"
                    onClick={() => setRelocate(true)}
                    onChange={(e) =>
                      SetResourceData({
                        ...resourcedata,
                        relocationStatus: true,
                      })}
                  />
                  <label className="form-check-label" htmlFor="radio1">
                    Yes
                  </label>
                </div>
              </div>
              <div className="col-sm-2">
                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="radio1"
                    name="abc"
                    value="option1"
                    onClick={() => setRelocate(false)}
                    onChange={(e) =>
                      SetResourceData({
                        ...resourcedata,
                        relocationStatus: false,
                      })}
                  />
                  <label className="form-check-label" htmlFor="radio1">
                    No
                  </label>
                </div>
              </div>
              <label className="col-sm-1 col-form-lable"></label>
            </div>
            <br />
            <div className="form-group row">
              <label className="col-sm-1 col-form-lable"></label>
              <label className="col-sm-2 col-form-lable">
                Attach JD Document:
              </label>
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

              <label className="col-sm-2 col-form-lable">
                If No To Relocate/Days:
              </label>
              <div className="col-sm-1">
                <input
                  type="number"
                  className="form-control form-control-sm"
                  disabled={relocate}
                  onChange={(e) =>
                    SetResourceData({
                      ...resourcedata,
                      relocationPeriod: e.target.value,
                    })
                  }
                />
              </div>
              <label className="col-sm-1 col-form-lable"></label>
            </div>
            <br />

            <br />
            <div className="form-group row">
              <label className="col-sm-2 col-form-lable"></label>
              <button
                className="col-sm-1 btn-outline-warning btn-sm "
                onClick={handlesubmit}
              >
                SUBMIT
              </button>
              <label className="col-sm-1 col-form-lable"></label>
              <button className="col-sm-1 btn-outline-success btn-sm " onClick={handlesave}>
                SAVE
              </button>
              <label className="col-sm-4 col-form-lable"></label>
              <button className="col-sm-1 btn-outline-danger btn-sm ">
                Delete
              </button>
            </div>
            <br />
            <div className="form-group row">
             {alertsubmit && (
              <div class="alert alert-success" role="alert">
              Submitted Successfully!
            </div>
             )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};