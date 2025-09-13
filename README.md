# Flask Basic Startup UI

A simple Flask web application with a modern, responsive UI built using Bootstrap 5 and custom CSS/JavaScript.

## Features

- 🚀 **Flask Web Framework** - Lightweight and flexible Python web framework
- 🎨 **Modern UI** - Bootstrap 5 with custom styling and animations
- 📱 **Responsive Design** - Works on desktop, tablet, and mobile devices
- ⚡ **Interactive Elements** - JavaScript-powered status checking and animations
- 🔧 **Template Inheritance** - Clean, maintainable HTML structure
- 🌐 **RESTful API** - Basic API endpoints for status checking

## Project Structure

```
Value-Basket/
├── app.py                 # Main Flask application
├── requirements.txt       # Python dependencies
├── README.md             # This file
├── templates/            # HTML templates
│   ├── base.html         # Base template with navigation
│   ├── index.html        # Home page
│   └── about.html        # About page
└── static/               # Static files
    ├── css/
    │   └── style.css     # Custom CSS styles
    └── js/
        └── main.js       # JavaScript functionality
```

## Quick Start

### Prerequisites

- Python 3.7 or higher
- pip (Python package installer)

### Installation

1. **Clone or download this project**

   ```bash
   # If you have git, you can clone the repository
   # Otherwise, just download and extract the files
   ```

2. **Navigate to the project directory**

   ```bash
   cd Value-Basket
   ```

3. **Create a virtual environment (recommended)**

   ```bash
   python -m venv venv

   # On Windows
   venv\Scripts\activate

   # On macOS/Linux
   source venv/bin/activate
   ```

4. **Install dependencies**

   ```bash
   pip install -r requirements.txt
   ```

5. **Run the application**

   ```bash
   python app.py
   ```

6. **Open your browser**
   Navigate to `http://localhost:5000` or `http://127.0.0.1:5000`

## Usage

### Home Page (`/`)

- Welcome message and application overview
- Interactive status checking button
- Feature showcase cards
- Real-time application status display

### About Page (`/about`)

- Detailed information about the application
- Feature list and getting started guide
- API endpoint documentation

### API Endpoints

- `GET /` - Home page
- `GET /about` - About page
- `GET /api/status` - JSON API status endpoint

## Customization

### Adding New Pages

1. Create a new HTML template in the `templates/` directory
2. Add a new route in `app.py`
3. Update navigation in `templates/base.html` if needed

### Styling

- Modify `static/css/style.css` for custom styles
- The app uses Bootstrap 5 classes for responsive design
- Custom CSS variables and animations are included

### JavaScript

- Add new functionality in `static/js/main.js`
- The file includes utility functions for status checking and animations

## Development

### Running in Development Mode

The application runs in debug mode by default when using `python app.py`. This provides:

- Automatic reloading when files change
- Detailed error messages
- Debug console

### Production Deployment

For production deployment, consider:

- Using a production WSGI server like Gunicorn
- Setting `debug=False` in the Flask app
- Using environment variables for configuration
- Setting up proper logging

## Technologies Used

- **Backend**: Flask 2.3.3
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **UI Framework**: Bootstrap 5.1.3
- **Icons**: Font Awesome 6.0.0
- **Styling**: Custom CSS with animations and responsive design

## License

This project is open source and available under the MIT License.

## Support

If you encounter any issues or have questions:

1. Check the console for error messages
2. Verify all dependencies are installed correctly
3. Ensure Python 3.7+ is being used
4. Check that port 5000 is available

---

**Happy coding! 🚀**
