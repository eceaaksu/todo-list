import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import "../App.css";

const ContactUs = () => {
  const [users, setUsers] = useState([]);
  const { t } = useTranslation();
  

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching the users:", error);
      });
  }, []);

  return (
    <div className="page-content">
      <h1>{t("contact.title")}</h1>
      <div className="contact-table-container">
        <table className="contact-table">
          <thead>
            <tr>
              <th>{t("contact.name")}</th>
              <th>{t("contact.username")}</th>
              <th>{t("contact.email")}</th>
              <th>{t("contact.phone")}</th>
              <th>{t("contact.website")}</th>
              <th>{t("contact.address")}</th>
              <th>{t("contact.company")}</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.website}</td>
                <td>{`${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`}</td>
                <td>{user.company.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContactUs;
