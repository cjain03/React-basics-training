import './Form.css';
import { useState } from 'react';

const countryCityMap = {
    India: ['Delhi', 'Mumbai', 'Bangalore'],
    USA: ['New York', 'Los Angeles', 'Chicago'],
    UK: ['London', 'Manchester', 'Liverpool'],
};

function Form() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        showPassword: false,
        phoneCode: '',
        phoneNumber: '',
        country: '',
        city: '',
        pan: '',
        aadhar: '',
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const validate = () => {
        const newErrors = {};
        if (!formData.firstName) newErrors.firstName = 'First name is required';
        if (!formData.lastName) newErrors.lastName = 'Last name is required';
        if (!formData.username) newErrors.username = 'Username is required';
        if (!formData.email || !/^[^@]+@[^@]+\.[^@]+$/.test(formData.email)) newErrors.email = 'Valid email is required';
        if (!formData.password) newErrors.password = 'Password is required';
        if (!formData.phoneCode) newErrors.phoneCode = 'Country code is required';
        if (!formData.phoneNumber || !/^[0-9]{10}$/.test(formData.phoneNumber)) newErrors.phoneNumber = 'Valid phone number is required';
        if (!formData.country) newErrors.country = 'Country is required';
        if (!formData.city) newErrors.city = 'City is required';
        if (!formData.pan || !/^\w{10}$/.test(formData.pan)) newErrors.pan = 'Valid PAN No. is required';
        if (!formData.aadhar || !/^\d{12}$/.test(formData.aadhar)) newErrors.aadhar = 'Valid Aadhar No. is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (validate()) {
            setSubmitted(true);
            console.log('Form submitted:', formData);
        }
    };

    const cities = countryCityMap[formData.country] || [];

    return (
        <div className="p-6 space-y-4 max-w-xl mx-auto">
            <h2 className="text-2xl font-bold text-center">Registration Form</h2>
            {submitted && (
                <div className="bg-green-100 p-4 text-green-800 rounded">
                    ✅ Form submitted successfully! (check console)
                </div>
            )}
            <form onSubmit={handleSubmit}>
                {['FirstName', 'LastName', 'Username', 'Email', 'Pan', 'Aadhar'].map(field => (
                    <div key={field}>
                        <label className="block capitalize">{field.replace(/([A-Z])/g, ' $1')}:</label>
                        <input name={field} type="text" value={formData[field]} onChange={handleChange} className="border p-2 w-full" />
                        {errors[field] && <p className="text-red-500 text-sm">{errors[field]}</p>}
                    </div>
                ))}

                <div>
                    <label>Password:</label>
                    <div className="password-wrapper">
                        <input
                            type={formData.showPassword ? 'text' : 'password'}
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        <button
                            type="button"
                            onClick={() => setFormData({ ...formData, showPassword: !formData.showPassword })}
                        >
                            {formData.showPassword ? 'Hide' : 'Show'}
                        </button>
                    </div>
                    {errors.password && <p>{errors.password}</p>}
                </div>

                <div>
                    <label> Phone No.:</label>
                    <div className="flex gap-2">
                        <input name="phoneCode" placeholder="Code" value={formData.phoneCode} onChange={handleChange} className="border p-2 w-1/4" />
                        <input name="phoneNumber" placeholder="Number" value={formData.phoneNumber} onChange={handleChange} className="border p-2 w-3/4" />
                    </div>
                    {errors.phoneCode && <p className="text-red-500 text-sm">{errors.phoneCode}</p>}
                    {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber}</p>}
                </div>

                <div>
                    <label>Country:</label>
                    <select name="country" value={formData.country} onChange={handleChange} className="border p-2 w-full">
                        <option value="">Select Country</option>
                        {Object.keys(countryCityMap).map(country => (
                            <option key={country} value={country}>{country}</option>
                        ))}
                    </select>
                    {errors.country && <p className="text-red-500 text-sm">{errors.country}</p>}
                </div>

                <div>
                    <label>City:</label>
                    <select name="city" value={formData.city} onChange={handleChange} className="border p-2 w-full">
                        <option value="">Select City</option>
                        {cities.map(city => (
                            <option key={city} value={city}>{city}</option>
                        ))}
                    </select>
                    {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
                </div>

                <button type="submit" className="bg-blue-600 text-white p-2 rounded mt-4">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Form;
