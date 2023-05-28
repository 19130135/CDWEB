import React from 'react';
import PropTypes from 'prop-types';


const Register = () => {


    
    return (
        <>
            <form>
                <div className="form-group">
                    <label htmlFor="register-email-2" >Your email address *</label>
                    <input type="email" className="form-control" id="register-email-2" name="register-email" required />
                </div>

                <div className="form-group">
                    <label htmlFor="register-password-2">Password *</label>
                    <input type="password" className="form-control" id="register-password-2" name="register-password" required />
                </div>

                <div className="form-footer">
                    <button className="btn btn-outline-primary-2">
                        <span>SIGN UP</span>
                        <i className="icon-long-arrow-right"></i>
                    </button>

                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="register-policy-2" required />
                        <label className="custom-control-label" htmlFor="register-policy-2">I agree to the <a href="#">privacy policy</a> *</label>
                    </div>
                </div>
            </form>
        </>
    );
}

export default Register;