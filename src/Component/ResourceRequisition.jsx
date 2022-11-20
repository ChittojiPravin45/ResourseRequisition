import React from "react";
import { useState } from "react";
// import { MultiSelect } from "react-multi-select-component";
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";

export const ResourceRequisition = () => {
  const [selected, setSelected] = useState([]);

  const options = [
    {
      value: "peroru",
      label: "hsfdag",
    },
  ];
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
                ADD
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
                />
              </div>
              <lable className="col-sm-2 col-form-lable">Created On:</lable>
              <div className="col-sm-3">
                <input
                  type="text"
                  className="form-control form-control-sm"
                  disabled
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
                />
              </div>
              <lable className="col-sm-2 col-form-lable">Positions:</lable>
              <div className="col-sm-3">
                <input type="text" className="form-control form-control-sm" />
              </div>
              <lable className="col-sm-1 col-form-lable"></lable>
            </div>
            <br />
            <div className="form-group row">
              <lable className="col-sm-1 col-form-lable"></lable>
              <lable className="col-sm-2 col-form-lable">Hiring Type:</lable>
              <div className="col-sm-3">
                <select className="form-select form-select-sm ">
                  <option>Select Type</option>
                  <option>C2C</option>
                  <option>FCT</option>
                  <option>FTE</option>
                  <option>Pro-Active</option>
                </select>
              </div>
              <lable className="col-sm-2 col-form-lable">Years Of Exp:</lable>
              <div className="col-sm-3">
                <input type="text" className="form-control form-control-sm" />
              </div>
              <lable className="col-sm-1 col-form-lable"></lable>
            </div>
            <br />
            <div className="form-group row">
              <lable className="col-sm-1 col-form-lable"></lable>
              <lable className="col-sm-2 col-form-lable">Requested By:</lable>
              <div className="col-sm-3">
                <select className="form-select form-select-sm">
                  <option>Select </option>
                  <option>HBU</option>
                </select>
              </div>
              <lable className="col-sm-2 col-form-lable">
                Type Of Resource:
              </lable>
              <div className="col-sm-3">
                <select class="form-select form-select-sm">
                  <option>Select Resource</option>
                  <option>Full Stack</option>
                  <option>Front-End</option>
                  <option>Back-End</option>
                  <option>UI Designer</option>
                  <option>Architect</option>
                  <option>Business Analysts</option>
                </select>
              </div>
              <lable className="col-sm-1 col-form-lable"></lable>
            </div>
            <br />
            <div className="form-group row">
              <lable className="col-sm-1 col-form-lable"></lable>
              <lable className="col-sm-2 col-form-lable">Technology:</lable>
              <div className="col-sm-3">
                <select class="form-select form-select-sm">
                  <option>Select Technology </option>
                  <option>HBU</option>
                </select>
              </div>
              <lable className="col-sm-2 col-form-lable">
                Technology Specialization:
              </lable>
              <div className="col-sm-3">
                <select className="form-select form-select-sm">
                  <option value="Select Specialization">
                    Select Specialization
                  </option>
                  <option value="Full Stack">Full Stack</option>
                  <option value="Front-End">Front-End</option>
                  <option value="Back-End">Back-End</option>
                  <option value="UI Designer">UI Designer</option>
                  <option value="Architect">Architect</option>
                  <option value="Business Analysts">Business Analysts</option>
                </select>
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
                <select class="form-select form-select-sm">
                  <option>Select Country </option>
                  <option>India</option>
                  <option>USA</option>
                  <option>UK</option>
                </select>
              </div>
              <lable className="col-sm-2 col-form-lable">
                Minimum Qualification:
              </lable>
              <div className="col-sm-3">
                <select className="form-select form-select-sm">
                  <option value="Select Specialization">
                    Select Qualification
                  </option>
                  <option value="Full Stack">Graduation</option>
                  <option value="Front-End">Post Graduation</option>
                </select>
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
                <select class="form-select form-select-sm ">
                  <option>Select State </option>
                  <option>Karnataka</option>
                  <option>Maharashtra</option>
                  <option>Tamil Nadu</option>
                  <option>Andhra Pradeshy</option>
                </select>
              </div>
              <lable className="col-sm-2 col-form-lable">Graduation:</lable>
              <div className="col-sm-3">
                <select className="form-select form-select-sm">
                  <option value="Select Specialization">
                    Select Graduation
                  </option>
                  <option value="Full Stack">B.E</option>
                  <option value="Front-End">B.Tech</option>
                  <option value="Front-End">B.Sc</option>
                  <option value="Front-End">B.A</option>
                </select>
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
                <select class="form-select form-select-sm">
                  <option>Select City </option>
                  <option>Banglore</option>
                  <option>Pune</option>
                </select>
              </div>
              <lable className="col-sm-2 col-form-lable">
                Graduation Specialization:
              </lable>
              <div className="col-sm-3">
                <select className="form-select form-select-sm">
                  <option value="Select Specialization">
                    Select Specialization
                  </option>
                  <option value="Front-End">Computer Science</option>
                  <option value="Front-End">
                    Electronics & Telecommunication
                  </option>
                  <option value="Front-End">Mechanical</option>
                  <option value="Front-End">Civil</option>
                  <option value="Front-End">Commerce</option>
                  <option value="Front-End">Arts</option>
                </select>
              </div>
              <lable className="col-sm-1 col-form-lable"></lable>
            </div>
            <br />
            <div className="form-group row">
              <lable className="col-sm-1 col-form-lable"></lable>
              <lable className="col-sm-2 col-form-lable">
                Type Of Developer:
              </lable>
              <div className="col-sm-3">
                
                <DropdownMultiselect
                  placeholder="Technology"
                  class="form-select form-select-sm"
                  options={[
                    "Java",
                    "Python",
                    "Dot Net",
                    "PHP",
                    "JavaScript",
                    "Ruby",
                    "C",
                    "C++",
                    "Go",
                    "SQL",
                  ]}
                  name="technologies"
                  selectDeselectLabel
                  buttonClass="bg-none border border-1"
                ></DropdownMultiselect>
                {/* <MultiSelect
                  options={options}
                  value={selected}
                  onChange={setSelected}
                  labelledBy={"Select"}
                  isCreatable={true}
                /> */}
                {/* <select class="form-select form-select-sm" multiple size="3">
                  <option>Select Technology </option>
                  <option>HBU</option>
                </select>
                <small>Select the Multiple options with CTRL</small> */}
              </div>
              <lable className="col-sm-2 col-form-lable">
                Post-Graduation:
              </lable>
              <div className="col-sm-3">
                <select className="form-select form-select-sm">
                  <option value="Select Specialization">
                    Select Post-Graduation
                  </option>
                  <option value="Full Stack">M.E</option>
                  <option value="Front-End">M.Tech</option>
                  <option value="Front-End">M.Sc</option>
                  <option value="Front-End">M.A</option>
                </select>
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
                <input type="date" name="" id="" />
              </div>
              <lable className="col-sm-2 col-form-lable">
                Post-Graduation Specialization:
              </lable>
              <div className="col-sm-3">
                <select className="form-select form-select-sm">
                  <option value="Select Specialization">
                    Select Specialization
                  </option>
                  <option value="Front-End">Computer Science</option>
                  <option value="Front-End">
                    Electronics & Telecommunication
                  </option>
                  <option value="Front-End">Mechanical</option>
                  <option value="Front-End">Civil</option>
                  <option value="Front-End">Commerce</option>
                  <option value="Front-End">Arts</option>
                </select>
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
                <select class="form-select form-select-sm">
                  <option>Select Time Zone </option>
                  <option>HBU</option>
                </select>
              </div>
              <lable className="col-sm-2 col-form-lable">
                Require Domain Knowledge:
              </lable>
              <div className="col-sm-3">
                <select className="form-select form-select-sm">
                  <option value="Select Specialization">
                    Select Post-Graduation
                  </option>
                  <option value="Full Stack">M.E</option>
                  <option value="Front-End">M.Tech</option>
                  <option value="Front-End">M.Sc</option>
                  <option value="Front-End">M.A</option>
                </select>
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
                    name="optradio"
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
                    name="optradio"
                    value="option1"
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
              <lable className="col-sm-2 col-form-lable">Passport:</lable>
              <div className="col-sm-1">
                <div class="form-check">
                  <input
                    type="radio"
                    class="form-check-input"
                    id="radio1"
                    name="optradio"
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
                    name="optradio"
                    value="option1"
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
              <lable className="col-sm-2 col-form-lable">VISA Available:</lable>
              <div className="col-sm-1">
                <div class="form-check">
                  <input
                    type="radio"
                    class="form-check-input"
                    id="radio1"
                    name="optradio"
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
                    name="optradio"
                    value="option1"
                  />
                  <label class="form-check-label" for="radio1">
                    No
                  </label>
                </div>
              </div>
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
                Approver Employee ID:
              </lable>

              <div className="col-sm-2">
                <input type="text" className="form-control form-control-sm" />
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
              <lable className="col-sm-2 col-form-lable">
                Apporver Employee Name:
              </lable>
              <div className="col-sm-3">
                <input type="text" className="form-control form-control-sm" />
              </div>
              <lable className="col-sm-2 col-form-lable">
                If No To Relocate/Days:
              </lable>
              <div className="col-sm-1">
                <input type="text" className="form-control form-control-sm" />
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
            </div>
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
