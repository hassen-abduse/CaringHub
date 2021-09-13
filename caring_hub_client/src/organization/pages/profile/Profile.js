import React, { Component } from "react";
import { Badge, Rate } from "antd";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { baseUrl } from "../../../redux/shared/baseUrl";
import { Alert, AlertTitle } from '@material-ui/lab';
import { CircularProgress, Container } from "@material-ui/core";

export default function Profile() {
  const { orgId } = useParams()
  const [org, setOrg] = useState({ address: {} })
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState(null)
  useEffect(async () => {
    fetch(baseUrl + 'orgs/' + orgId)
    .then(response => {
      if (response.ok) {
        return response
      }
      else {
        const error = new Error('Error ' + response.status + ':' + response.statusText)
        error.response = response
        throw error
      }
    },
      error => {
        const errorM = new Error(error.message)
        throw errorM
      })
    .then(response => response.json())
    .then(response => {
      setOrg(response)
      setIsLoaded(true)
    })
    .catch(error => {
      setError(error.message)
      setIsLoaded(true)
    })

  }, [])
  if (error) return (
    <Container style={{ marginTop: "100px", backgroundColor: "#FCFAFB" }}>
      <div className='container'>
        <div className='row' style={{ display:'flex', justifyContent: 'center',}}>
          <Alert style={{margin: '50px',padding: '50px'}}severity="error">
            <AlertTitle style={{fontWeight:'bold'}}>Error</AlertTitle>
            <strong>{error}</strong>
          </Alert>
        </div>
      </div>

    </Container >

  )
  else if (!isLoaded) return (
    <Container style={{ marginTop: "100px", backgroundColor: "#FCFAFB" }}>
      <div class='container'>
        <div className='row'>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '100px', marginBottom: '75px' }}>
            <CircularProgress size={'50px'} />

          </div>
          <p style={{ textAlign: 'center', fontSize: '25px', fontWeight: 'bold' }}>Loading...</p>
        </div>
      </div>
    </Container>
  )

  else return (
    <div style={{ marginTop: "100px" }} className="container">
      <div style={{}} className="row">
        <div
          style={{ display: "flex", justifyContent: "center" }}
          className="col-lg-1"
        >
          <img
            style={{ borderRadius: "100%", width: "80px", height: "80px" }}
            alt="Image placeholder"
            src={org.logo}
          ></img>
        </div>
        <div className="col-lg-3">
          <h4 style={{ marginBottom: 0 }}>{org.name}</h4>
          <p style={{ color: "#159197" }} className="">
            Organization
          </p>
        </div>
        <div
          style={{
            display: "flex",
            boxShadow: "0px 40px 200px -1px rgb(0 0 0 / 10%)",
            border: " 1px solid rgba(0,0,0,.125)",
            // backgroundColor: "red",
            borderRadius: "15px",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="col-lg-3"
        >
          <a style={{ textDecoration: "none" }} href="">
            <div className="m-2">
              <p
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "700",
                  lineHeight: 1,
                }}
                className="mb-1 teal mt-1 text-center"
              >
                0
              </p>
              <p
                style={{ fontSize: "0.7rem" }}
                className="m-0 p-0 text-center "
              >
                New Project
              </p>
            </div>
          </a>
          <a style={{ textDecoration: "none" }} href="">
            <div className="m-2">
              <p
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "700",
                  lineHeight: 1,
                }}
                className="mb-1 teal mt-1 text-center"
              >
                3
              </p>
              <p
                style={{ fontSize: "0.7rem" }}
                className="m-0 p-0 text-center "
              >
                InProgress
              </p>
            </div>
          </a>
          <a style={{ textDecoration: "none" }} href="">
            <div className=" m-2">
              <p
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "700",
                  lineHeight: 1,
                }}
                className="mb-1 teal mt-1 text-center"
              >
                4
              </p>
              <p
                style={{ fontSize: "0.7rem" }}
                className="m-0 p-0 text-center "
              >
                Completed
              </p>
            </div>
          </a>
        </div>
      </div>
      <div className="row mt-5">
        <div style={{}} class="col-lg-4">
          <h4 className="teal ">Essentials</h4>
          <h6 className="mt-4 mb-0 teal">Email</h6>
          <p>{org.emailAddress}</p>
          <h6 className="mt-4 mb-0 teal">User Name</h6>
          <p>{org.username}</p>

          <h6 className="mt-4 mb-0 teal">Phone Number</h6>
          <p>{org.phoneNumber}</p>
        </div>
        <div style={{}} class="col-lg-4">
          <h4 className="teal">Organization Mission</h4>

          <p className="">
              {org.mission}
          </p>
        </div>
        <div style={{}} class="col-lg-4">
          <h4 className="teal">Location</h4>

          <h6 className="teal">Address</h6>
          <p className="m-0">George VI street</p>
          <p className="m-0">{org.address.city}</p>
          <p className="m-0">Ethiopia</p>

          <h6 className="teal mt-4">Time Zone</h6>
          <p className="m-0"> East African Time Zone </p>
          <p>UTC + 3:00</p>

          <h4 className=" mt-5 teal">Files</h4>
          <p className="m-0">document.pdf</p>
          <p className="m-0">Professional License.pdf</p>
        </div>
      </div>
    </div>
  );
}

