import { Admins } from "../axios/index";


export const EmployeeData = async () => {
  let Employeedata = await Admins.get(`/viewallemployees`)
    .then((res) => {
      return res.data.Data;
    })
    .catch((err) => {
      return err.response;
    });

  return Employeedata;
};

export const CreateEmployee = async (data) => {
  //  console.log(data);
  const CreateEmployee = await Admins.post(`/createEmployee`, data)
    .then((res) => {
      console.log(res);
      return res.data;
    })
    .catch((err) => {
      // alert(err.message);
      return err.response;
    });

  return CreateEmployee;
};

export const EditEmployee = async (data) => {
  //  console.log(data);
  const EditEmployee = await Admins.post(`/updateEmployee`, data)
    .then((res) => {
      console.log(res);
      return res.data;
    })
    .catch((err) => {
      // alert(err.message);
      return err.response;
    });

  return EditEmployee;
};
export const Studentdata = async () => {
  let Studentdata = await Admins.get(`/viewallstudents`)
    .then((res) => {
      return res.data.Data;
    })
    .catch((err) => {
      return err.response;
    });

  return Studentdata;
};

export const CreateStudent = async (data) => {
  //  console.log(data);
  const CreateStudent = await Admins.post(`/createStudent`, data)
    .then((res) => {
      console.log(res);
      return res.data;
    })
    .catch((err) => {
      // alert(err.message);
      return err.response;
    });

  return CreateStudent;
};

export const UpdateStudent = async (data) => {
  //  console.log(data);
  const UpdateStudent = await Admins.post(`/UpdateStudent`, data)
    .then((res) => {
      console.log(res);
      return res.data;
    })
    .catch((err) => {
      // alert(err.message);
      return err.response;
    });

  return UpdateStudent;
};

export const ViewallUniversities = async () => {
  const ViewUniversity = await Admins.get("/viewuniversities")
    .then((res) => {
      return res.data.Data;
    })
    .catch((err) => {
      // alert(err.message);
      return err.response;
    });
  
  return ViewUniversity;
}
;

export const DeleteStudent = async (r) => {
       var _ = console.log;
          _('jijkj')
  const Student = await Admins.post("/deletestudent", r)
    
    .then((res) => {

      return res.data.message;
    })
    .catch((err) => {
      // alert(err.message);
      return err.response;
    });

  return Student;
};


export const DeleteEmployee = async (r) => {
  
  const Employee = await Admins.post("/deleteemployee", r)

    .then((res) => {
      return res.data.message;
    })
    .catch((err) => {
      // alert(err.message);
      return err.response;
    });

  return Employee;
};

export const AllRegUsers = async () => {
  const ViewallRegUsers = await Admins.get("/viewallreguser")
    .then((res) => {
      return res.data.Data;
    })
    .catch((err) => {
      // alert(err.message);
      return err.response;
    });

  return ViewallRegUsers;
};