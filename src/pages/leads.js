import React, { useState, useEffect } from 'react';
import Header from '../components/header';
import '../styles/leads.css';
import Sidebar from '../components/sidebar';
import leads_icon from '../asserts/images/leads_icon.png';
import warning from '../asserts/images/warning.png';
import tick from '../asserts/images/approved.png';
import Pending from '../asserts/images/pending.png';
import { Navigate } from 'react-router-dom';
import { Studentdata } from '../apis/admin';
import { studentdata } from '../helpers/rawdata';
import { HiOutlineDocumentSearch } from 'react-icons/hi';

function Leads() {
  const admintype = localStorage.getItem('Employee_Type');
  const [studentsmgData, setstudentsmgData] = useState([]);
  const [filtereddata, setfiltereddata] = useState([]);
  const [selectedstd, setselectedstd] = useState([]);

  const initialimg = {
    imgone: false,
    imgtwo: false,
    imgthree: false,
    imgfour: false,
    imgfive: false,
  };
  const [imgarr, setimgarr] = useState({ initialimg });

  useEffect(() => {
    StudentData();
  }, []);

  if (!admintype) {
    return <Navigate to='/' />;
  }

  const StudentData = async () => {
    try {
      var data = await Studentdata();

      setstudentsmgData(data);
    } catch (error) {
      console.log('error while fetching data');
    }
  };

  const handleSearchchange = (e) => {
    const filteredArray = studentsmgData?.filter((r) =>
      r.Students_Name.includes(e.target.value)
    );

    setfiltereddata(filteredArray);
    const value = e.target.value;
    if (value) {
      const selectedstddata = studentsmgData?.filter(
        (r) => r.Students_Name === value
      );
      // console.log(selectedstddata);
      if (selectedstddata.length > 0) {
        setselectedstd(selectedstddata);
        if (selectedstddata[0].Status === 'Education Details') {
          const imgdata = {
            imgone: true,
            imgtwo: false,
            imgthree: false,
            imgfour: false,
            imgfive: false,
          };
          setimgarr(imgdata);
        } else if (selectedstddata[0].Status === 'University Finalised') {
          const imgdata = {
            imgone: true,
            imgtwo: true,
            imgthree: false,
            imgfour: false,
            imgfive: false,
          };
          setimgarr(imgdata);
        } else if (selectedstddata[0].Status === 'Certificates Uploaded') {
          const imgdata = {
            imgone: true,
            imgtwo: true,
            imgthree: true,
            imgfour: false,
            imgfive: false,
          };
          setimgarr(imgdata);
        } else if (selectedstddata[0].Status === 'Visa Process') {
          const imgdata = {
            imgone: true,
            imgtwo: true,
            imgthree: true,
            imgfour: true,
            imgfive: false,
          };
          setimgarr(imgdata);
        } else if (selectedstddata[0].Status === 'Joining Date Finalised') {
          const imgdata = {
            imgone: true,
            imgtwo: true,
            imgthree: true,
            imgfour: true,
            imgfive: true,
          };
          setimgarr(imgdata);
        }
      }
    }
  };

  return (
    <div className='dashboardpg'>
      <Header />
      <div className='second_con'>
        <div className='sidebar_con'>
          <Sidebar />
        </div>
        <div className='main_con'>
          <div className='maincon_heading'>
            <img src={leads_icon} alt=''></img>
            <span>LEADS</span>
          </div>
          <div className='leads_con'>
            <ul className='ul_leads'>
              <li className='leads_head'>Student Leads</li>
              <li>
                <input
                  className='leads_input_pd'
                  placeholder='Name'
                  onChange={handleSearchchange}
                  list='data'
                  autoComplete='off'
                ></input>
                <datalist
                  id='data'
                  autoComplete='off'
                  style={{ backgroundColor: 'red' }}
                >
                  {filtereddata?.map((r, i) => {
                    return (
                      <>
                        <option
                          onSelect={(r) => selectedstd(r)}
                          className='optstddata'
                          key={i}
                        >
                          {r.Students_Name}
                        </option>
                      </>
                    );
                  })}
                </datalist>
              </li>
            </ul>
            <ul className='lead_titles'>
              <li>
                Students : <span>{selectedstd[0]?.Students_Name}</span>
              </li>
              <li>
                Consultant : <span>{selectedstd[0]?.Counsellor}</span>
              </li>
              <li>
                Country : <span>{selectedstd[0]?.Counselling_Country}</span>
              </li>
            </ul>

            <div className='leads_bar_div'>
              {' '}
              {
                // <img src={leads_bar} alt=""></img>
              }
              <div className='leadsbarmaindiv'>
                <div>
                  {imgarr.imgone === true ? (
                    <img src={tick} alt=''></img>
                  ) : (
                    <img src={Pending} alt=''></img>
                  )}
                </div>
                <div>
                  {imgarr.imgtwo === true ? (
                    <img src={tick} alt=''></img>
                  ) : (
                    <img src={Pending} alt=''></img>
                  )}
                </div>
                <div>
                  {imgarr.imgthree === true ? (
                    <img src={tick} alt=''></img>
                  ) : (
                    <img src={Pending} alt=''></img>
                  )}
                </div>
                <div>
                  {imgarr.imgfour === true ? (
                    <img src={tick} alt=''></img>
                  ) : (
                    <img src={Pending} alt=''></img>
                  )}
                </div>
                <div>
                  {imgarr.imgfive === true ? (
                    <img src={tick} alt=''></img>
                  ) : (
                    <img src={Pending} alt=''></img>
                  )}
                </div>
              </div>
              <div className='leadsbar_desc'>
                <span>Education Details</span>
                <span>University Finalized</span>
                <span>Certificate uploaded</span>
                <span>Visa Process</span>
                <span>Joining Date</span>
              </div>
            </div>

            <div>
              <span>
                <img className='warning_img' src={warning} alt=''></img>
              </span>
              <span className='leads_notes'>
                Note : Waiting for Visa Approval{' '}
              </span>
            </div>
          </div>
          <div className='personalinf_div'>
            <p className='per_inf_head'>Personal Information</p>
            <p className='per_inf_head'>(As included in your passport)</p>
            <div className='dls_flx'>
              <div className='per_inf_first_tbl'>
                <p className='per_inf_inptext'>First Name *</p>
                <input
                  className='per_inf_input'
                  placeholder={selectedstd[0]?.Students_Name}
                ></input>
                <p className='per_inf_inptext'>Email Id *</p>
                <input className='per_inf_input'></input>
                <p className='per_inf_inptext'>Passport Number *</p>
                <input className='per_inf_input'></input>
              </div>
              <div className='per_inf_second_tbl'>
                <div className='per_inf_first_tbl'>
                  <p className='per_inf_inptext'>SurName</p>
                  <input className='per_inf_input'></input>
                  <p className='per_inf_inptext'>Mobile Number</p>
                  <input className='per_inf_input'></input>
                  <p className='per_inf_inptext'>Passport Expiry date</p>
                  <input className='per_inf_input'></input>
                </div>
              </div>
              <div className='per_inf_third_tbl'>
                <div className='per_inf_first_tbl'>
                  <p className='per_inf_inptext'>Date Of Birth </p>
                  <input className='per_inf_input'></input>
                  <p className='per_inf_inptext'>Whatsapp Number</p>
                  <input className='per_inf_input'></input>
                  <p className='per_inf_inptext'>Marital status*</p>
                  <div className='dls_flex'>
                    <span className='mr_4'>
                      <input type='checkbox'></input>
                    </span>
                    <span className='per_inf_inptext'>Single</span>
                    <span className='ml_5 mr_4'>
                      <input type='checkbox'></input>
                    </span>
                    <span className='per_inf_inptext '>Married</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p className='per_inf_inptext '>Gender</p>
              <div className='dls_flex'>
                <span className='mr_4'>
                  <input type='checkbox'></input>
                </span>
                <span className='per_inf_inptext'>Male</span>
                <span className='ml_5 mr_4'>
                  <input type='checkbox'></input>
                </span>
                <span className='per_inf_inptext '>Female</span>
              </div>
            </div>
            <p className='per_inf_inptext fz_20 '>Address Details</p>

            <div className='dls_flex'>
              <div className='adrdetails_first'>
                <div>
                  <p className='per_inf_inptext '>Address *</p>
                  <input className='per_inf_input width_lg'></input>
                </div>
                <div className='dls_flex jc_spbtn'>
                  <div>
                    {' '}
                    <p className='per_inf_inptext '>Nativity </p>
                    <select className='per_inf_input  '>
                      <option>CANADA</option>
                      <option>UK</option>
                      <option>USA</option>
                      <option>AUSTRALIA</option>
                      <option>NEW ZEALAND</option>
                      <option>EUROPE</option>
                      <option>SCHENGEN</option>
                      <option>SINGAPORE</option>
                      <option>MALAYSIA</option>
                      <option>OTHERS</option>
                    </select>
                  </div>
                  <div className='ml_10'>
                    <p className='per_inf_inptext '>Counselling Country *</p>
                    <select className='per_inf_input  mr_10'>
                      <option>CANADA</option>
                      <option>UK</option>
                      <option>USA</option>
                      <option>AUSTRALIA</option>
                      <option>NEW ZEALAND</option>
                      <option>EUROPE</option>
                      <option>SCHENGEN</option>
                      <option>SINGAPORE</option>
                      <option>MALAYSIA</option>
                      <option>OTHERS</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className='adrdetails_second'>
                <p className='per_inf_inptext'>Alternate Number</p>
                <input className='per_inf_input'></input>
                <p className='per_inf_inptext'>Occupation</p>
                <input className='per_inf_input'></input>
              </div>
            </div>
            <div className='dls_flex'>
              <div className='per_last-div'>
                <p className='per_inf_inptext inp_wd-lg'>Facebook Link</p>
                <input className='per_inf_input'></input>
              </div>
              <div className='per_last-div2'>
                <p className='per_inf_inptext'>Linkedin Link</p>
                <input className='per_inf_input'></input>
              </div>
            </div>
            <div className='leadspg_edudet'>
              <h2>Education Details</h2>
              <div className='table_div'>
                <table className='tbl_countries tbl_edudet'>
                  <thead className='tr_head_coun '>
                    <th className='std_name_couns' width='20%'>
                      Education Level
                    </th>
                    <th className='counselor_couns' width='25%'>
                      Board/University
                    </th>
                    <th className='course_couns' width='20%'>
                      Major Subjects
                    </th>
                    <th className='doe_couns' width='15%'>
                      Year of Passing
                    </th>
                    <th className='action_couns' width='10%'>
                      % Percentage
                    </th>
                    <th className='action_couns' width='10%'>
                      View Documents
                    </th>
                  </thead>

                  <tbody className='appcomp_tbody'>
                    {studentdata?.map((r, i) => {
                      return (
                        <tr key={i} className='tr_app_comp'>
                          <td className='appcomp_th_names table_td' width='20%'>
                            {r.education_level}
                          </td>
                          <td className='appcomp_th_countrys table_td'>
                            {r.board}
                          </td>
                          <td className='appcomp_th_courses table_td'>
                            {r.major_sub}
                          </td>
                          <td className='appcomp_th_dojs table_td'>
                            {r.year_of_passing}
                          </td>
                          <td className='appcomp_th_dojs table_td'>
                            {r.percentage}
                          </td>

                          <td>
                            <span className='docs_viewicon'>
                              <HiOutlineDocumentSearch size='1.6em' />
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
               </div>
              <div className='course_interest'>
                <div>Course Interested To Pursue :</div>
                <div>
                  <input></input>
                  <input></input>
                </div>
                 </div>
                <div className='intakecon'>
                  <span>Intake :</span>
                   <span> <input type="checkbox"></input>  <span>Summer</span></span>
                  <span> <input type="checkbox"></input>  <span>Winter</span></span>
                  <span> <input type="checkbox"></input>  <span>Fall</span></span>
                  <span> <input type="checkbox"></input>  <span>Others</span></span>
                </div>
                <div className='levelcon'>
                  <span>Level :</span>
               <span> <input type="checkbox"></input>  <span>Masters</span></span>
                  <span> <input type="checkbox"></input>  <span>UG</span></span>
                  <span> <input type="checkbox"></input>  <span>UG Diploma</span></span>
                  <span> <input type="checkbox"></input>  <span>Others</span></span>
                </div>
                <div className='extracur_con'>
                  <span>Extra Curricular Activities : <input type='text'></input></span>
              </div>
              <div className='eng_profcon'>
                <div>
                  <h4 className='headingh4'>ENGLISH PROFICIENCY</h4>
                  <table className='engprof_tbl'>
                  <thead>
                    <th></th>
                      <th>High</th>
                      <th>Moderate</th>
                      <th>Basic</th>
                      <th>Total</th>
                    </thead>
                    <tbody className='tbl_body_eng'>
                      <tr><td>Listen</td> <td></td> <td></td> <td></td></tr>
                    <tr><td>Read</td> <td></td> <td></td> <td></td></tr>
                    <tr><td>Write</td> <td></td> <td></td> <td></td></tr>
                     <tr><td>Speak</td> <td></td> <td></td> <td></td></tr>
                    </tbody>
                  </table>
              </div>
              <div>

              </div>
              </div>
             
            <div className='entrylevelcon'>
              <h4 className='headingh4'>Entry Level Exam Taken</h4>
              <table className='tbl_examtaken'>
                <thead>
                  <th>Name</th>
                   <th>Date of Exam </th>
                    <th>Score</th>
                </thead>
                <tbody>
                  <tr><td>IELTS</td><td></td><td></td></tr>
                     <tr><td>SAT</td><td></td><td></td></tr>
                </tbody>
              </table>
            </div>
            <h4 className='headingh4'>SPONSOR'S FINANCIAL STATUS</h4>
            <div className='sponsorcon'>
              <div className='sponsorconfirst'>
               <p>(1)</p>
                <p>Name: Ramesh  <span>Relation: Mama</span></p>
                <p>Occupation : Business</p>
                <ul>
                  <li><span>Movable Asserts</span>   <span className='assert_spn'> Vechicle</span></li>
                  <li><span>Immovable Asserts</span>  <span className='assert_spn'>House</span> </li>
                  <li><span>Annual Income </span>  <span className='assert_spn'>800000</span></li>
                </ul>
              </div>
              <div className='sponsorconsecond'>
                
                <p>(2)</p>
                <p><span>Name: Ramesh </span> <span>Relation: Mama</span></p>
                <p>Occupation : Business</p>
                <ul>
                  <li><span>Movable Asserts</span>   <span className='assert_spn'> Vechicle</span></li>
                  <li><span>Immovable Asserts</span>  <span className='assert_spn'>House</span> </li>
                  <li><span>Annual Income </span>  <span className='assert_spn'>800000</span></li>
                </ul>
              </div>
             
            </div>
          
            <p className='knowuspara'>How did you come know about us ? </p>
             <div className='aboutuscon'> <div><input type='checkbox'></input><span>Google Search</span></div> 
                         <div><input type='checkbox'></input><span>Email</span></div> 
             <div><input type='checkbox'></input><span>Internet</span></div> 
            <div><input type='checkbox'></input><span>Advertisement</span></div> 
           <div> <input type='checkbox'></input><span>Word of Mouth</span></div> 
              <div><input type='checkbox'></input><span>Others <span className='otherschkbx'>Friends </span></span></div> 
            </div>
            <div className='place_Con'>
              <span>Place :</span>
              <input type='text'></input>

            </div>
             <div className='date_con'>
              <span>Date :</span>
              <input type='text'></input>
              <span className='signaturespn'>Signature of the Applicant</span>
            </div>
            <hr></hr>
            <h4 className='ofcpurpose'>For Office Purpose Only</h4>
            <table className='ofcusetbl'>
              <tbody>
                <tr>
                  <td >Comments</td>
                   <td><textarea type='text'></textarea></td>
                </tr>
                 <tr >
                  <td ></td>
                    <td><textarea type='text'></textarea></td>
                </tr>
                 <tr >
                  <td ></td>
                    <td><textarea type='text'></textarea></td>
                </tr>
                 <tr >
                  <td ></td>
                    <td><textarea type='text'></textarea></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leads;
