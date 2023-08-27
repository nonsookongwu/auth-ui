import { useEffect, useState } from "react";
import axios, { CanceledError } from "axios";


export interface FormFields {
  firstName: boolean;
  lastname: boolean;
  fullName:  boolean;
  email: boolean;
  PhoneNumber: boolean;
  password: boolean;
}

export interface AdminData {
  formFields: FormFields;
  formPositioning: string;
  borderRadius: string;
  buttonColor: string;
  brandImageUrl: string;
  brandImageSize: string;
  brandImagePosition: string;
  logoUrl: string;
  logoImageSize: string;
  logoImagePosition: string;
}

// interface FetchAdmin<AdminData> {
//   data: AdminData[];
// }

const useAdmin = () => {
  const [adminData, setAdminData] = useState<AdminData[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    axios.get<AdminData[]>("http://localhost:8000/adminData", {
      signal: controller.signal,
    })
      .then((res) => {
        console.log(res);
        setAdminData(res.data);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
      });

    return () => {
      controller.abort();
    };
  }, []);

  return {adminData, error, loading };
};

export default useAdmin;
