import React, { useState } from "react";
import "../css/ContactPage.css";
import { Navbar } from '../components/Navbar';
import Footer from "../components/Footer";

export const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contactnum: '',
        date: '',
        category: '',
        customEvent: '',
        message: '',
    });

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';}
        if (!formData.contactnum.trim()) {
            newErrors.contactnum = 'Phone Number is required';
        }
        if (!formData.date.trim()) {
            newErrors.date = 'Date is required';
        }else {
            const selectedDate = new Date(formData.date);
            const currentDate = new Date();
            currentDate.setHours(0, 0, 0, 0);
            if (selectedDate < currentDate) {
                newErrors.date = 'Please select a future date';
            }}
        if (!formData.category.trim()) {
            newErrors.category = 'Select type of Event';
        }
        if (formData.category === 'Others' && !formData.customEvent.trim()) {
            newErrors.customEvent = 'Please specify the event type';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            setSuccessMessage('');
        } else {
            setErrors({});
            setSuccessMessage('Form Submitted');

            setFormData({
                name: '',
                email: '',
                contactnum: '',
                date: '',
                category: '',
                customEvent: '',
                message: '',
            });
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div className="contact-container">
            <header className="App-header">
                <Navbar />
            </header>
            <div className="contact-page">
                <h1 className="contact-header">Contact Us</h1>
                <div className="contact-details">
                    <p className="contact-details-prg">To begin using our services, please complete the contact form if you want to have a consultation for your event. At XtravaGala, we are here to assist you every step of the way. Whether you have inquiries about our services or need support with planning your event, our team is always ready to help. </p>
                    <p className="contact-details-prg">For immediate assistance, don't hesitate to give us a call. XtravaGala is committed to providing exceptional support to bring your vision to life. Reach out today, and let's create something extraordinary together!</p>
                    <br/>
                    <p className="contact-details-prg">Phone</p>
                    <p className="contact-details-prg">0912-345-6789</p>
                    <br/>
                    <p className="contact-details-prg">E-mail</p>
                    <p className="contact-details-prg"><a href="mailto:relli_emmanuel_javier@dlsl.edu.ph" className="email-link">relli_emmanuel_javier@dlsl.edu.ph</a></p>
                    <p className="contact-details-prg"><a href="mailto:jiro_rafael_layug@dlsl.edu.ph" className="email-link">jiro_rafael_layug@dlsl.edu.ph</a></p>
                    <p className="contact-details-prg"><a href="mailto:marc_eiron_hernandez@dlsl.edu.ph" className="email-link">marc_eiron_hernandez@dlsl.edu.ph</a></p>
                    <p className="contact-details-prg"><a href="mailto:xavier_gelligan@dlsl.edu.ph" className="email-link">xavier_gelligan@dlsl.edu.ph</a></p>
                </div>
                <div className="horizontal_section">
                    <div className="line"></div>
                </div>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <label htmlFor="name">Name: </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        onChange={handleInputChange}
                        value={formData.name}
                        placeholder="Input Name"
                        className="form-control"
                    />
                    {errors.name && <p>{errors.name}</p>}

                    <label htmlFor="email">E-mail:</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        onChange={handleInputChange}
                        value={formData.email}
                        placeholder="Input E-mail address"
                        className="form-control"
                    />
                    {errors.email && <p>{errors.email}</p>}

                    <label htmlFor="contactnum">Your Number:</label>
                    <input
                        type="tel"
                        pattern="[0-9]{11}"
                        id="contactnum"
                        name="contactnum"
                        onChange={handleInputChange}
                        value={formData.contactnum}
                        placeholder="Input Phone Number [e.g. 09123456789]"
                        className="form-control"
                    />
                    {errors.contactnum && <p>{errors.contactnum}</p>}

                    <label htmlFor="date">Date of Consultation:</label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        onChange={handleInputChange}
                        value={formData.date}
                        className="form-control"
                    />
                    {errors.date && <p>{errors.date}</p>}

                    <label htmlFor="category">Type of Event:</label>
                    <select
                        id="category"
                        name="category"
                        onChange={handleInputChange}
                        value={formData.category}
                        className="form-control"
                    >
                        <option value="" disabled>Select Category</option>
                        <option value="Weddings">Weddings</option>
                        <option value="Birthdays">Birthdays</option>
                        <option value="Corporate Event">Corporate Event</option>
                        <option value="Anniversaries">Anniversaries</option>
                        <option value="Others">Others</option>
                    </select>
                    {errors.category && <p>{errors.category}</p>}

                    {formData.category === 'Others' && (
                        <>
                            <label htmlFor="customEvent">Specify the Event Type:</label>
                            <input
                                type="text"
                                id="customEvent"
                                name="customEvent"
                                onChange={handleInputChange}
                                value={formData.customEvent}
                                placeholder="Specify your event type"
                                className="form-control"
                            />
                            {errors.customEvent && <p>{errors.customEvent}</p>}
                        </>
                    )}

                    <label htmlFor="message">Write your message here</label>
                    <textarea
                        name="message"
                        rows="8"
                        placeholder="Enter your message"
                        onChange={handleInputChange}
                        value={formData.message}
                        className="form-control"
                    ></textarea>

                    <button type="submit" className="button-1">Submit</button>
                    {successMessage && <p>{successMessage}</p>}
                </form>
            </div>
            <Footer/>
        </div>
    );
};
