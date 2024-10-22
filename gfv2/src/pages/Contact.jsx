import React, { useState, useRef } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import '../styles/Contact.css';
import contact from '../assets/Contact.png';
import phoneIcon from '../assets/Phone.png';
import buildingIcon from '../assets/Company.png';
import projectIcon from '../assets/PT.png';
import globeIcon from '../assets/CurrentWeb.png';
import fileAddIcon from '../assets/Upload.png';
import userIcon from '../assets/FullName.png';
import mailIcon from '../assets/Email.png';
import useScrollReveal from '../hooks/useScrollReveal';
const Contact = () => {
    const ref = useScrollReveal('animate__fadeIn', { threshold: 0.1 });
    const characterLimit = 10000;  // Define character limit here

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        company: '',
        preferredContact: '',
        projectType: '',
        currentWebsite: '',
        message: '',
    });

    const [isChecked, setIsChecked] = useState(false);
    const [showTerms, setShowTerms] = useState(false);
    const [file, setFile] = useState(null);  // State for file input
    const fileInputRef = useRef(null);  // Ref for the file input

    const messageLength = formData.message.length;  // Get current message length

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,  // For other inputs
        });
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            const fileSizeInMB = selectedFile.size / (1024 * 1024); // Convert bytes to MB
            if (fileSizeInMB > 50) {
                alert("File size should be less than 50MB");
                e.target.value = null;  // Reset the file input value
            } else {
                setFile(selectedFile);  // Set the selected file
            }
        }
    };

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const dataToSend = new FormData();
        dataToSend.append('fullName', formData.fullName);
        dataToSend.append('email', formData.email);
        dataToSend.append('phoneNumber', formData.phoneNumber);
        dataToSend.append('company', formData.company);
        dataToSend.append('preferredContact', formData.preferredContact);
        dataToSend.append('projectType', formData.projectType);
        dataToSend.append('currentWebsite', formData.currentWebsite);
        dataToSend.append('file', file);  // Ensure this is a File object
        dataToSend.append('message', formData.message);

        try {
            const response = await axios.post('http://localhost:3001/contacts', dataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            console.log('Form successfully submitted:', response.data);
            Swal.fire({
                title: 'Success!',
                text: 'Form submitted successfully!',
                icon: 'success',
                confirmButtonText: 'OK',
                background: '#d4edda', // Optional: change background color
                color: '#155724', // Optional: change text color
            });

            // Reset the form
            setFormData({
                fullName: '',
                email: '',
                phoneNumber: '',
                company: '',
                preferredContact: '',
                projectType: '',
                currentWebsite: '',
                message: '',
            });
            setFile(null);  // Reset file state
            if (fileInputRef.current) {
                fileInputRef.current.value = '';  // Reset file input in the DOM
            }
            setIsChecked(false); // Uncheck the checkbox after submission

        } catch (error) {
            console.error('Error submitting the form:', error.response ? error.response.data : error.message);
        }
    };

    const toggleTermsModal = () => {
        setShowTerms(!showTerms);
    };

    return (
        <div id="Contact Us" className="contact-section">
            <div className="get-in-touch">
                <div className="rectangle">
                    <div className="get-in-touch-element">
                        <span className="get-in-touch-text">Get in Touch</span>
                        <div className="circle-icon-container">
                            <img src={contact} alt="Contact" className="circle-icon" />
                        </div>
                    </div>
                </div>
            </div>
            <h1 className="contact-heading">Contact Us</h1>
            <div className='contact-container-gf'>
                <form className="contact-form-gf" onSubmit={handleSubmit}>

                    {/** Full Name Field */}
                    <div className="form-group-gf">
                        <label className="input-label-gf">Full Name <span className="required-gf">*</span></label>
                        <div className="input-container-gf">
                            <img src={userIcon} alt="Full Name" className="icon-inside-gf" />
                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                placeholder="Eg: JohnDoe M"
                                className="input-field-gf"
                                required
                            />
                        </div>
                    </div>

                    {/** Email Field */}
                    <div className="form-group-gf">
                        <label className="input-label-gf">Email <span className="required-gf">*</span></label>
                        <div className="input-container-gf">
                            <img src={mailIcon} alt="Email" className="icon-inside-gf" />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Eg: xyz@abd.com"
                                className="input-field-gf"
                                required
                            />
                        </div>
                    </div>

                    {/** Phone Number Field */}
                    <div className="form-group-gf">
                        <label className="input-label-gf">Phone Number <span className="required-gf">*</span></label>
                        <div className="input-container-gf">
                            <img src={phoneIcon} alt="Phone Number" className="icon-inside-gf" />
                            <input
                                type="tel"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                placeholder="Eg: 1234567890"
                                className="input-field-gf"
                                required
                            />
                        </div>
                    </div>

                    {/** Company Field */}
                    <div className="form-group-gf">
                        <label className="input-label-gf">Company <span className="required-gf">*</span></label>
                        <div className="input-container-gf">
                            <img src={buildingIcon} alt="Company" className="icon-inside-gf" />
                            <input
                                type="text"
                                name="company"
                                value={formData.company}
                                onChange={handleChange}
                                placeholder="Eg: XYZ Ltd"
                                className="input-field-gf"
                                required
                            />
                        </div>
                    </div>

                    {/** Preferred Contact Method Field */}
                    <div className="form-group-gf">
                        <label className="input-label-gf">Preferred Contact Method <span className="required-gf">*</span></label>
                        <div className="input-container-gf">
                            <img src={phoneIcon} alt="Preferred Contact" className="icon-inside-gf" />
                            <select
                                name="preferredContact"
                                value={formData.preferredContact}
                                onChange={handleChange}
                                className="input-field-gf"
                                required
                            >
                                <option value="" className='option-gf'>Select</option>
                                <option value="Zoom / GoogleMeet" className='option-gf'>Zoom / GoogleMeet</option>
                                <option value="Call / Mail" className='option-gf'>Call / Mail</option>
                                <option value="Whatsapp" className='option-gf'>Whatsapp</option>
                            </select>
                        </div>
                    </div>

                    {/** Project Type Field */}
                    <div className="form-group-gf">
                        <label className="input-label-gf">Project Type <span className="required-gf">*</span></label>
                        <div className="input-container-gf">
                            <img src={projectIcon} alt="Project Type" className="icon-inside-gf" />
                            <select
                                name="projectType"
                                value={formData.projectType}
                                onChange={handleChange}
                                className="input-field-gf"
                                required
                            >
                                <option value="" className='option-gf'>Select</option>
                                <option value="WebDevelopment" className='option-gf'>Web Development</option>
                                <option value="WebDesign" className='option-gf'>Web Design</option>
                                <option value="SEO Optimization" className='option-gf'>SEO Optimization</option>
                                <option value="Digital Marketing" className='option-gf'>Digital Marketing</option>
                                <option value="E-Commerce Development" className='option-gf'>E-Commerce Development</option>
                                <option value="Inventory Management Portal" className='option-gf'>Inventory Management Portal</option>
                            </select>
                        </div>
                    </div>

                    {/** Current Website Field */}
                    <div className="form-group-gf">
                        <label className="input-label-gf">Current Website <span className="required-gf">*</span></label>
                        <div className="input-container-gf">
                            <img src={globeIcon} alt="Current Website" className="icon-inside-gf" />
                            <select
                                name="currentWebsite"
                                value={formData.currentWebsite}
                                onChange={handleChange}
                                className="input-field-gf"
                                required
                            >
                                <option value="" className='option-gf'>Select</option>
                                <option value="Yes & Needs Redesigned" className='option-gf'>Yes & Needs Redesigned</option>
                                <option value="Yes, but need a minor update" className='option-gf'>Yes, but need a minor update</option>
                                <option value="No, this is a new project" className='option-gf'>No, this is a new project</option>
                            </select>
                        </div>
                    </div>

                    {/** Upload File Field */}
                    <div className="form-group-gf">
                        <label className="input-label-gf">Upload File (optional)</label>
                        <div className="input-container-gf">
                            <img src={fileAddIcon} alt="Upload File" className="icon-inside-gf" />
                            <input
                                type="file"
                                placeholder="Documents like project briefs, designs, or other relevant files."
                                name="file"
                                accept=".pdf,.doc,.docx,.ppt,.pptx,.png,.jpg,.jpeg"
                                onChange={handleFileChange}
                                ref={fileInputRef}  // Add ref here
                                className="input-field-gf"
                            />
                        </div>
                        <span className="file-type-note-gf">Documents like project briefs, designs, or other relevant files.</span>
                        <span className="file-size-note-gf">Note: The file size should be less than 50MB</span>
                    </div>

                    {/** Message Field */}
                    <div className="form-group-gf">
                        <label className="input-label-gf">Description <span className="required-gf">*</span></label>
                        <div className="input-container-gf">
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Give us the detailed description of your project..."
                                className="text-area-field-gf"
                                maxLength={characterLimit} // Set character limit
                                required
                            />

                        </div>
                        <div
                            className="char-count-gf"
                            style={{ color: messageLength > 9990 ? 'red' : 'white' }} // Change color based on character count
                        >
                            {messageLength} / {characterLimit}
                        </div>
                    </div>
                    <div className="form-group-gf checkbox-container-gf">
    <label className="custom-checkbox-gf">
        <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            className="hidden-checkbox-gf" // Add class to hide the default checkbox
        />
        <span className="checkmark-gf"></span> {/* Custom checkmark */}
        <span className='terms-text-gf'></span>By clicking this you agree to our <span className="terms-link-gf" onClick={toggleTermsModal}>Terms & Conditions</span>
    </label>
</div>

                    <button type="submit"
                        className={`submit-button-gf ${!isChecked ? 'disabled-button-gf' : ''}`}
                        disabled={!isChecked}>Submit</button>
                    {/* Terms & Conditions Modal */}
                    {showTerms && (
                        <div className="terms-modal-gf">
                            <div className="modal-content-gf">
                                <span className="close-gf" onClick={toggleTermsModal}>&times;</span>
                                <h2>Terms & Conditions</h2>
                                <p>Your terms and conditions go here...</p>
                                {/* Add the rest of your Terms & Conditions content here */}
                            </div>
                        </div>
                    )}
                </form>
            </div>

        </div>
    );
};

export default Contact;
