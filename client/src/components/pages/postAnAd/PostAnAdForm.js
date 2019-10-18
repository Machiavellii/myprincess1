import React, { Fragment, useState } from 'react';
import '../../../styles/PostAnAdForm.css';

import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createProfil } from '../../../actions/profile';

import {
  spokenLanguageList,
  categoryList,
  servicesList,
  silhouetteList,
  originList,
  cantonsList,
  cityList,
  genderList,
  sexual_orientationList,
  typeList
} from '../../../constants/data.json';

const PostAnAdForm = ({ createProfil }) => {
  const [formData, setFormData] = useState({
    gender: '',
    sexual_orientation: '',
    phone: '',
    category: '',
    services: '',
    age: '',
    origin: '',
    description: '',
    city: '',
    canton: '',
    zip: '',
    cover_photo: null,
    is_active: '',
    languages: [],
    silhouette: '',
    rate: '',
    slogan: '',
    hours: '',
    website: '',
    type: ''
  });

  const {
    gender,
    sexual_orientation,
    phone,
    category,
    services,
    age,
    origin,
    description,

    city,
    canton,
    zip,
    cover_photo,
    is_active,
    languages,
    silhouette,
    rate,
    slogan,
    hours,
    website,
    type
  } = formData;

  const onChange = e => {
    e.targe.name === 'cover_photo'
      ? setFormData({ cover_photo: e.target.files[0] })
      : setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onCheckBox = (e, item) => {
    if (languages.indexOf(e.target.value) < 1 && e.target.checked) {
      languages.push(item);
    }

    languages.map((lang, i) => {
      console.log(e.target.checked);
      if (e.target.checked && lang) {
        console.log(lang, i);
      }
    });

    console.log(languages);
  };

  const onSubmit = e => {
    e.preventDefault();
    console.log(formData);
    // createProfile(formData, history);
  };

  return (
    <Fragment>
      <h1 className="text-center">Post an ad - 7 days</h1>
      <form className="container mb-5" onSubmit={e => onSubmit(e)}>
        <div className="card mb-4 mt-5">
          <div className="card-body">
            <h5 className="card-title">Already have an account?</h5>
            <hr />
            <p className="card-text">
              <sup>
                <a href="!#">Login</a>
              </sup>{' '}
              If you do not-have an account, you can create it by below Reviews
              entering your e-mail address / username. The account details will
              be confirmed by email.
            </p>
            <div className="form-group col-md-12">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Email"
                name="email"
              />
            </div>
          </div>
        </div>

        <div className="form-group col-md-12">
          <p>Job Activity</p>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="is_active"
              id="active"
              value={is_active}
              onChange={e => onChange(e)}
            />
            <label className="form-check-label" htmlFor="active">
              active
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="is_active"
              id="inactive"
              value={is_active}
              onChange={e => onChange(e)}
            />
            <label className="form-check-label" htmlFor="inactive">
              inactive
            </label>
          </div>
          <p className="text-center">
            <small className="tip">
              Please select if your profile is active
            </small>
          </p>
        </div>

        <div className="form-group col-md-12 mb-4">
          <label htmlFor="nickname">
            That nickname will be displayed is your profile *
          </label>
          <input
            type="text"
            className="form-control"
            id="nickname"
            placeholder="Nickname"
          />
        </div>

        <div className="form-group col-md-12 mt-3">
          <label htmlFor="type">Type</label>
          <select
            className="form-control"
            id="type"
            name="type"
            value={type}
            onChange={e => onChange(e)}
          >
            {typeList.map((item, index) => {
              return (
                <option key={index} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>

        <div className="form-group col-md-12">
          <label htmlFor="Spoken languages" className="form-check-label">
            Spoken languages
          </label>
          <br />
          {spokenLanguageList.map((item, index) => {
            return (
              <div
                className="form-check form-check-inline dynamic-checkbox"
                key={index}
              >
                <input
                  className="form-check-input"
                  type="checkbox"
                  value={item}
                  onChange={e => onCheckBox(e, item)}
                  name="languages"
                />
                <label
                  className="form-check-label dynamic-checkbox-label ml-2"
                  htmlFor={item}
                >
                  {item}
                </label>
              </div>
            );
          })}
          <p className="text-center mt-4">
            <small className="tip">Please select spoken languages</small>
          </p>
        </div>

        <div className="form-group col-md-12 mb-3">
          <label htmlFor="slogan">Slogan</label>
          <input
            type="text"
            className="form-control"
            id="slogan"
            placeholder="Slogan"
            name="slogan"
            value={slogan}
            onChange={e => onChange(e)}
          />
        </div>

        <div className="form-group col-md-12 mt-4">
          <label htmlFor="gender">Gender</label>
          <select
            className="form-control"
            id="gender"
            onChange={e => onChange(e)}
            value={gender}
            name="gender"
          >
            {genderList.map((item, index) => {
              return (
                <option key={index} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>

        <div className="form-group col-md-12">
          <label htmlFor="Services" className="form-check-label">
            Services *
          </label>
          <br />
          {servicesList.map((item, index) => {
            return (
              <div
                className="form-check form-check-inline dynamic-checkbox"
                key={index}
              >
                <input
                  className="form-check-input"
                  type="checkbox"
                  id={item}
                  value={services}
                  name="services"
                  onChange={e => onChange(e)}
                />
                <label
                  className="form-check-label dynamic-checkbox-label ml-2"
                  htmlFor={item}
                >
                  {item}
                </label>
              </div>
            );
          })}
        </div>

        <div className="form-group col-md-12 mt-3">
          <label htmlFor="category">Category</label>
          <select
            className="form-control"
            id="category"
            onChange={e => onChange(e)}
            name="category"
            value={category}
          >
            {categoryList.map((item, index) => {
              return (
                <option key={index} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>

        <div className="form-group col-md-12 mt-3">
          <label htmlFor="sexual_orientation">Sexual_orientation</label>
          <select
            className="form-control"
            id="sexual_orientation"
            onChange={e => onChange(e)}
            value={sexual_orientation}
            name="sexual_orientation"
          >
            {sexual_orientationList.map((item, index) => {
              return (
                <option key={index} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>

        <div className="form-group col-md-12">
          <label htmlFor="age">Age *</label>
          <input
            type="text"
            className="form-control"
            id="age"
            placeholder="18"
            name="age"
            value={age}
            onChange={e => onChange(e)}
          />
        </div>

        <div className="form-group col-md-12">
          <label htmlFor="silhoue">Silhouette *</label>
          <select
            className="form-control"
            id="silhoue"
            onChange={e => onChange(e)}
            name="silhouette"
            value={silhouette}
          >
            {silhouetteList.map((item, index) => {
              return (
                <option key={index} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>

        <div className="form-group col-md-12">
          <label htmlFor="origin">Origin *</label>
          <select
            className="form-control"
            id="origin"
            onChange={e => onChange(e)}
            value={origin}
            name="origin"
          >
            {originList.map((item, index) => {
              return (
                <option key={index} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>

        <div className="form-group col-md-12">
          <label htmlFor="desc">Description *</label>
          <CKEditor
            onInit={editor => {
              // Insert the toolbar before the editable area.
              editor.ui
                .getEditableElement()
                .parentElement.insertBefore(
                  editor.ui.view.toolbar.element,
                  editor.ui.getEditableElement()
                );
            }}
            id="desc"
            //onChange={(event, editor) => console.log({ event, editor })}
            onChange={e => onChange(e)}
            editor={ClassicEditor}
            data=""
            width="500"
            name="description"
            value={description}
            //config={ /* the editor configuration */ }
          />
        </div>

        {/* <div className="form-group col-md-12">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            className="form-control"
            id="address"
            placeholder=""
            name='address'
            value={address}
            onChange={e => onChange(e)}
          />
        </div> */}

        <div className="form-group col-md-12 mt-3">
          <label htmlFor="cantons">Canton</label>
          <select
            className="form-control"
            id="canton"
            onChange={e => onChange(e)}
            value={canton}
            name="canton"
          >
            {cantonsList.map((item, index) => {
              return (
                <option key={index} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>

        <div className="form-group col-md-12 mt-3">
          <label htmlFor="city">City</label>
          <select
            className="form-control"
            id="city"
            onChange={e => onChange(e)}
            value={city}
            name="city"
          >
            {cityList.map((item, index) => {
              return (
                <option key={index} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>

        <div className="form-group col-md-12">
          <label htmlFor="zip">City Zip</label>
          <input
            type="text"
            className="form-control"
            id="zip"
            placeholder="8000"
            name="zip"
            value={zip}
            onChange={e => onChange(e)}
          />
        </div>

        <div className="form-group col-md-12">
          <label htmlFor="coverPicture">Cover picture</label>
          <input
            type="file"
            className="form-control-file"
            id="coverPicture"
            onChange={e => onChange(e)}
            name="cover_photo"
          />
          <p className="text-center">
            <small className="tip">Add a cover photo</small>
          </p>
        </div>

        <div className="form-group col-md-12">
          <label htmlFor="gallery">Upload your photographs (max. 10)</label>
          <input type="file" className="form-control-file" id="gallery" />
          <p className="text-center">
            <small className="tip">
              The first picture will be displayed as the hand.
            </small>
          </p>
        </div>

        <div className="form-group col-md-12">
          <label htmlFor="businessHours">Business hours</label>
          <textarea
            className="form-control"
            id="businessHours"
            rows="3"
            placeholder="21:00-05:00"
            name="hours"
            value={hours}
            onChange={e => onChange(e)}
          ></textarea>
        </div>

        <div className="form-group col-md-12">
          <label htmlFor="minimumRate">Minmum Rate</label>
          <textarea
            className="form-control"
            id="minimumRate"
            rows="3"
            placeholder="200CHF"
            name="rate"
            value={rate}
            onChange={e => onChange(e)}
          ></textarea>
        </div>

        <div className="form-group col-md-12">
          <label htmlFor="phone">Phone Number *</label>
          <input
            type="text"
            className="form-control"
            id="phone"
            placeholder="+41 79 000 00 00"
            name="phone"
            value={phone}
            onChange={e => onChange(e)}
          />
        </div>

        <div className="form-group col-md-12">
          <label htmlFor="website">Personal Website</label>
          <input
            type="text"
            className="form-control"
            id="website"
            name="website"
            value={website}
            placeholder="https://www.site.com"
            onChange={e => onChange(e)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary btn-lg btn-block main-theme-btn"
        >
          Submit
        </button>
      </form>
    </Fragment>
  );
};

export default connect(
  null,
  { createProfil }
)(withRouter(PostAnAdForm));
