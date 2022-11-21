import React from "react";
import { useState } from "react";
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";

export const ResourceRequisition = () => {
  const [resourcedata, SetResourceData] = useState({});
  console.log(resourcedata);

  const [Passport, setPassport] = useState(true);
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
  console.log(city);

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
              <lable className="col-sm-2 col-form-lable">*Positions: </lable>
              <div className="col-sm-3">
                <input
                  type="text"
                  className="form-control form-control-sm"
                  required
                  onChange={(e) =>
                    SetResourceData({
                      ...resourcedata,
                      position: e.target.value,
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
              <div className="col-sm-3">
                <DropdownMultiselect
                  placeholder="Select Type"
                  className="form-select form-select-sm"
                  options={["C2C", "FCT", "FTE", "Pro-Active"]}
                  name="Select Type"
                  selectDeselectLabel
                  buttonClass="bg-none border border-1"
                  onClick={(e) =>
                    SetResourceData({
                      ...resourcedata,
                      hiringtype: e.target.value,
                    })
                  }
                ></DropdownMultiselect>
              </div>
              <lable className="col-sm-2 col-form-lable">Years Of Exp:</lable>
              <div className="col-sm-3">
                <input
                  type="text"
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
              <lable className="col-sm-2 col-form-lable">Requested By:</lable>
              <div className="col-sm-3">
                <DropdownMultiselect
                  placeholder="Select "
                  class="form-select form-select-sm"
                  options={["HBU"]}
                  name="Requested By"
                  selectDeselectLabel
                  buttonClass="bg-none border border-1"
                  onChange={(e) =>
                    SetResourceData({
                      ...resourcedata,
                      requestedby: e.target.value,
                    })
                  }
                ></DropdownMultiselect>
              </div>
              <lable className="col-sm-2 col-form-lable">
                Type Of Resource:
              </lable>
              <div className="col-sm-3">
                <DropdownMultiselect
                  placeholder="Select Resource "
                  class="form-select form-select-sm"
                  options={[
                    "Full Stack",
                    "Front-End",
                    "Back-End",
                    "UI Designer",
                    "Architect",
                    "Business Analysts",
                  ]}
                  name="Select Resource"
                  selectDeselectLabel
                  buttonClass="bg-none border border-1"
                  onChange={(e) =>
                    SetResourceData({
                      ...resourcedata,
                      typeofresource: e.target.value,
                    })
                  }
                ></DropdownMultiselect>
              </div>
              <lable className="col-sm-1 col-form-lable"></lable>
            </div>
            <br />
            <div className="form-group row">
              <lable className="col-sm-1 col-form-lable"></lable>
              <lable className="col-sm-2 col-form-lable">Technology:</lable>
              <div className="col-sm-3">
                <DropdownMultiselect
                  placeholder="Select Technology "
                  class="form-select form-select-sm"
                  options={[
                    "Full Stack",
                    "Front-End",
                    "Back-End",
                    "UI Designer",
                    "Architect",
                    "Business Analysts",
                  ]}
                  name="Select Technology"
                  selectDeselectLabel
                  buttonClass="bg-none border border-1"
                  onChange={(e) =>
                    SetResourceData({
                      ...resourcedata,
                      technology: e.target.value,
                    })
                  }
                ></DropdownMultiselect>
              </div>
              <lable className="col-sm-2 col-form-lable">
                Technology Specialization:
              </lable>
              <div className="col-sm-3">
                <DropdownMultiselect
                  placeholder="Select Specialization "
                  class="form-select form-select-sm"
                  options={[
                    "Full Stack",
                    "Front-End",
                    "Back-End",
                    "UI Designer",
                    "Architect",
                    "Business Analysts",
                  ]}
                  name="Select Specialization"
                  selectDeselectLabel
                  buttonClass="bg-none border border-1"
                  onChange={(e) =>
                    SetResourceData({
                      ...resourcedata,
                      technologyspecialization: e.target.value,
                    })
                  }
                ></DropdownMultiselect>
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
                Minimum Qualification:
              </lable>
              <div className="col-sm-3">
                <DropdownMultiselect
                  placeholder="Select Specialization "
                  class="form-select form-select-sm"
                  options={["Graduation", "Post Graduation"]}
                  name="Select Specialization"
                  selectDeselectLabel
                  buttonClass="bg-none border border-1"
                  onChange={(e) =>
                    SetResourceData({
                      ...resourcedata,
                      minqualification: e.target.value,
                    })
                  }
                ></DropdownMultiselect>
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
                <DropdownMultiselect
                  placeholder="Select Graduation "
                  class="form-select form-select-sm"
                  options={["B.E", "B.Tech ", "B.Sc", "B.A"]}
                  name="Select Graduation"
                  selectDeselectLabel
                  buttonClass="bg-none border border-1"
                  onChange={(e) =>
                    SetResourceData({
                      ...resourcedata,
                      graduation: e.target.value,
                    })
                  }
                ></DropdownMultiselect>
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
                <DropdownMultiselect
                  placeholder="Select Specialization "
                  class="form-select form-select-sm"
                  options={[
                    "Computer Science",
                    "Electronics & Telecommunication",
                    "Mechanical",
                    "Civil",
                    "Commerce",
                    "Arts",
                  ]}
                  name="Select Specialization"
                  selectDeselectLabel
                  buttonClass="bg-none border border-1"
                  onChange={(e)=>SetResourceData({...resourcedata,graduationspecialization:e.target.value})}
                ></DropdownMultiselect>
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
                <DropdownMultiselect
                  placeholder="Select Time Zone "
                  class="form-select form-select-sm"
                  options={["India", "UK"]}
                  name="Select Time Zone"
                  selectDeselectLabel
                  buttonClass="bg-none border border-1"
                  onChange={(e)=>SetResourceData({...resourcedata,timezoneshifts:e.target.value})}
                ></DropdownMultiselect>
              </div>

              <lable className="col-sm-2 col-form-lable">
                Post-Graduation:
              </lable>
              <div className="col-sm-3">
                <DropdownMultiselect
                  placeholder="Select Post-Graduation "
                  class="form-select form-select-sm"
                  options={["M.E", "M.Tech ", "M.Sc", "M.A"]}
                  name="Select Post-Graduation"
                  selectDeselectLabel
                  buttonClass="bg-none border border-1"
                  onChange={(e)=>SetResourceData({...resourcedata,postgraduation:e.target.value})}
                ></DropdownMultiselect>
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
                <input type="date" name="" id="" onChange={(e)=>SetResourceData({...resourcedata,resourceavailabledate:e.target.value})}/>
              </div>
              <lable className="col-sm-2 col-form-lable">
                Post-Graduation Specialization:
              </lable>
              <div className="col-sm-3">
                <DropdownMultiselect
                  placeholder="Select Specialization "
                  class="form-select form-select-sm"
                  options={[
                    "Computer Science",
                    "Electronics & Telecommunication",
                    "Mechanical",
                    "Civil",
                    "Commerce",
                    "Arts",
                  ]}
                  name="Select Specialization"
                  selectDeselectLabel
                  buttonClass="bg-none border border-1"
                  onChange={(e)=>SetResourceData({...resourcedata,postgraduationspecialization:e.target.value})}
                ></DropdownMultiselect>
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
                    onClick={(e)=>SetResourceData({...resourcedata,requiredtoworkinshifts:e.target.value})}
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
                Require Domain Knowledge:
              </lable>
              <div className="col-sm-3">
                <DropdownMultiselect
                  placeholder="Select Domain "
                  class="form-select form-select-sm"
                  options={["Health Care", "Banking"]}
                  name="Select Domain"
                  selectDeselectLabel
                  buttonClass="bg-none border border-1"
                  onChange={(e)=>SetResourceData({...resourcedata,requireddomainknowledge:e.target.value})}
                ></DropdownMultiselect>
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
              <lable className="col-sm-2 col-form-lable">Sales Order No:</lable>
              <div className="col-sm-2">
                <input type="text" className="form-control form-control-sm" />
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
                    onClick={(e)=>SetResourceData({...resourcedata,visaavailable:e.target.value})}
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
              <lable className="col-sm-2 col-form-lable">JRs No:</lable>
              <div className="col-sm-1">
                <input type="text" className="form-control form-control-sm" />
              </div>
              <lable className="col-sm-1 col-form-lable"></lable>
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
              <lable className="col-sm-1 col-form-lable"></lable>
            </div>
            <br />
            <div className="form-group row">
              <lable className="col-sm-1 col-form-lable"></lable>
              <lable className="col-sm-2 col-form-lable">
                Apporver Employee Name:
              </lable>
              <div className="col-sm-3">
                <input type="text" className="form-control form-control-sm" />
              </div>

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
              <lable className="col-sm-2 col-form-lable">Apporved on:</lable>
              <div className="col-sm-2">
                <input
                  type="text"
                  className="form-control form-control-sm"
                  disabled
                />
              </div>
              <lable className="col-sm-1 col-form-lable"></lable>

              <lable className="col-sm-2 col-form-lable">
                If No To Relocate/Days:
              </lable>
              <div className="col-sm-1">
                <input type="text" className="form-control form-control-sm" />
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
