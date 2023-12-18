import React, { useState } from "react";

// import axios from "axios";
// import ReactDOM from "react-dom/client";
// import TextInput from "../../components/TextInput/TextInput";
import Button from "../../components/Button/Button";
// import App from './App';
import "./Dashboard.css";
import TextInput from "../../components/TextInput/TextInput";
import httpClient from "../../Services/httpClient";

const Dashboard = () => {
  const [showUrlAddView, setshowUrlAddView] = useState(false);
  const [urlPayload, setUrlPayload] = useState({ originalLink: "", name: "" });
  const [shortUrl, setShortUrl] = useState("");

  const postDataToApi = async () => {
    if (!urlPayload.originalLink) {
      alert("Please provide original URL");
      return;
    }
    try {
      const { data } = await httpClient.post("url", urlPayload);
      console.log("Data from backend", data);
      setShortUrl(`http://localhost:5555/api/url/${data.urlCode}`);
    } catch (error) {
      console.error(error);
    }
  };

  const renderEmptyState = () => {
    return (
      <div className="dashboard__empty-state">
        <p>No short URL provided!</p>
        <Button
          label="Create short URL"
          variant="secondary"
          onClick={() => setshowUrlAddView(true)}
        />
      </div>
    );
  };

  const renderAddNewUrl = () => {
    return (
      <div className="dashboard__addNew">
        <TextInput
          label="Original URL"
          value={urlPayload.originalLink}
          placeholder="https://google.com/api/v1"
          onChange={(val) =>
            setUrlPayload({ ...urlPayload, originalLink: val.toLocaleString() })
          }
        />
        <TextInput
          label="Name"
          value={urlPayload.name}
          placeholder="Excel Academy"
          onChange={(val) =>
            setUrlPayload({ ...urlPayload, name: val.toLocaleString() })
          }
        />
        <div className="dashboard__add-new-actions">
          <Button label="Generate Short URL" onClick={() => postDataToApi()} />
          {/* <br /> */}
          <Button label="Cancel" onClick={() => setshowUrlAddView(false)} />
        </div>
      </div>
    );
  };

  return (
    <div className="dashboard">
      {showUrlAddView ? renderAddNewUrl() : renderEmptyState()}
      {Boolean(shortUrl) && <h3>{shortUrl}</h3>}
      {/* {!showUrlAddView && (
        <div className="dashboard__empty-state">
          <p>No short URL provided!</p>
          <Button
            label="Create short URL"
            variant="secondary"
            onClick={() => setshowUrlAddView(true)}
          />
        </div>
      )} */}

      {/* <h3>Dashboard</h3>
    <TextInput
      // label="Username:"
      type="password"
      placeholder="username"
      onChange={(val) => console.log(val)}
    /> */}
    </div>
  );
};

export default Dashboard;
