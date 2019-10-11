import React, { Fragment } from 'react';
import '../../../styles/PostAnAdForm.css';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {
  spokenLanguageList,
  categoryList,
  servicesList,
  silhouetteList,
  originList,
  cityList
} from '../../../constants/data.json';

class PostAnAdForm extends React.Component {
  render() {
    return (
      <Fragment>
        <h1 className="text-center">Post an ad - 7 days</h1>
        <form className="container mb-5">
          <div className="card mb-4 mt-5">
            <div className="card-body">
              <h5 className="card-title">Already have an account?</h5>
              <hr />
              <p className="card-text">
                <sup>
                  <a href="!#">Login</a>
                </sup>{' '}
                If you do not-have an account, you can create it by below
                Reviews entering your e-mail address / username. The account
                details will be confirmed by email.
              </p>
              <div className="form-group col-md-12">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Email"
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
                name="inlineRadioOptions"
                id="active"
                value="active"
              />
              <label className="form-check-label" htmlFor="active">
                active
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inactive"
                value="inactive"
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

          <div className="form-group col-md-12">
            <label className="form-check-label">Spoken languages</label>
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
                    id={item}
                    value={item}
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

          <div className="form-group col-md-12 mb-5">
            <label htmlFor="slogan">Slogan</label>
            <input
              type="text"
              className="form-control"
              id="slogan"
              placeholder="Slogan"
            />
          </div>

          <div className="form-group col-md-12">
            <label className="form-check-label">Services *</label>
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
                    value={item}
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
            <select className="form-control" id="category">
              {categoryList.map((item, index) => {
                return (
                  <option key={index} value={index}>
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
            />
          </div>

          <div className="form-group col-md-12">
            <label htmlFor="silhoue">Silhouette *</label>
            <select className="form-control" id="silhoue">
              {silhouetteList.map((item, index) => {
                return (
                  <option key={index} value={index}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="form-group col-md-12">
            <label htmlFor="origin">Origin *</label>
            <select className="form-control" id="origin">
              {originList.map((item, index) => {
                return (
                  <option key={index} value={index}>
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
              onChange={(event, editor) => console.log({ event, editor })}
              editor={ClassicEditor}
              data=""
              width="500"
              //config={ /* the editor configuration */ }
            />
          </div>

          <div className="form-group col-md-12">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              className="form-control"
              id="address"
              placeholder=""
            />
          </div>

          <div className="form-group col-md-12 mt-3">
            <label htmlFor="city">City</label>
            <select className="form-control" id="city">
              {cityList.map((item, index) => {
                return (
                  <option key={index} value={index}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="form-group col-md-12">
            <label htmlFor="coverPicture">Cover picture</label>
            <input
              type="file"
              className="form-control-file"
              id="coverPicture"
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
            ></textarea>
          </div>

          <div className="form-group col-md-12">
            <label htmlFor="minimumRate">Minmum Rate</label>
            <textarea
              className="form-control"
              id="minimumRate"
              rows="3"
              placeholder="200CHF"
            ></textarea>
          </div>

          <div className="form-group col-md-12">
            <label htmlFor="phone">Phone Number *</label>
            <input
              type="text"
              className="form-control"
              id="phone"
              placeholder="+41 79 000 00 00"
            />
          </div>

          <div className="form-group col-md-12">
            <label htmlFor="website">Personal Website</label>
            <input
              type="text"
              className="form-control"
              id="website"
              placeholder="https://www.site.com"
            />
          </div>
          <button
            type="button"
            className="btn btn-primary btn-lg btn-block main-theme-btn"
          >
            Preview
          </button>
        </form>
      </Fragment>
    );
  }
}

export default PostAnAdForm;
