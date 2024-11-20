import { render, screen, cleanup } from '@testing-library/react';
import App from '../components/App';
import { MemoryRouter } from 'react-router-dom';

jest.mock("../config", () => ({
  apiUrl: "https://mock-api.example.com",
}));

describe("App Component", () => {
  test("renders the App component", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    // Check if the main div is rendered
    const mainDiv = screen.getByTestId("main-div-container");
    expect(mainDiv).toBeInTheDocument();
  })
});

describe("App Component", () => {
  test("renders the App component", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const imageContainer = screen.getByTestId("image-container");
    expect(imageContainer).toBeInTheDocument();
  })
});

describe("App Component", () => {
  test("renders the App component", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const backgroundImage = screen.getByRole("img");
    expect(backgroundImage).toBeInTheDocument();
    expect(backgroundImage).toHaveAttribute(
      "src",
      "./images/7b374967eec7e7d48ef6c2dc0709100c_noLogin.png"
    );
  })
});

describe("App Component", () => {
  test("renders the App component", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const userName = screen.getByText("Mohammed Jawed");
    expect(userName).toBeInTheDocument();
  })
});

describe("App Component", () => {
  test("renders the App component", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const userHandle = screen.getByText("@thisuix571");
    expect(userHandle).toBeInTheDocument();
  })
});

describe("App Component", () => {
  test("renders the App component", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const userEmail = screen.getByText("thisuix571@gmail.com");
    expect(userEmail).toBeInTheDocument();
  })
});

test("renders Login component", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  const loginComponent = screen.getByText(/login/i); 
  expect(loginComponent).toBeInTheDocument();
});



