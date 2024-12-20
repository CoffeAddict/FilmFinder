# FilmFinder Next.JS App

A Next.js application that interacts with the TMDB API to display Movies data. This app provides users with a responsive, user-friendly interface for browsing movies details and searching by name.



#### Demo

A live demo is available at [arodriguez-filmfinder.vercel.app](https://arodriguez-filmfinder.vercel.app/)


##### Features
- **Movie Search**: Search for any movie by name.
- **Detailed Information**: View individual movie details such as genres, released year, etc.
- **Responsive Design**: Desktop-first approach for smooth viewing on all devices.
- **Lazy Loading**: Loads data incrementally for efficient performance.

##### Technologies Used
- **Next JS**: JavaScript framework for building UI.
- **Turbopack**: Development environment for fast builds and optimized bundles.
- **Fetch API**: For handling API requests.
- **Tailwind CSS**: Utility-first CSS framework for responsive design.

> **Note**: You’ll need Node.js 16+ to run this project.

<br/>

#### Installation

##### 1. Clone the repository:
```bash
git clone https://github.com/CoffeAddict/FilmFinder.git
cd filmfinder
```

##### 2. Install dependencies:
```bash
npm install
```

##### 3. Environment Variables
To connect to the TMDB API, create a .env file at the root of the project with the following:
```env
API_BASE_URL=your API URL
API_KEY=your API key
NEXT_PUBLIC_MOVIE_IMG_BASE_URL=https://image.tmdb.org/t/p
```

##### 4. Start the development server
```bash
npm run dev
```
<br/>

##### Project Structure
```
├── public/
│   └── favicon.ico         # App favicon
│   └── images              # App images
├── styles/                 # Style files
├── types/                  # Typescript files
├── utils/                  # Utility functions
├── app/
│   ├── components/         # App components
│   ├── home/               # Homepage
│   ├── layout.tsx          # Layout component
│   ├── movie/              # Movie detail page
│   ├── page.tsx            # Default page component
├── pages/
│   ├── api/                # Internal API endpoints
│   ├── components/         # Reusable components
└── README.md               # Project documentation
```

<br/>

#### API Endpoints

This app uses the TMDB v3, you can check the docs [here](https://developer.themoviedb.org/reference/search-movie)

<br/>

#### Build and Deployment
```bash
npm run build
```

<br/>

### Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on the GitHub repository.