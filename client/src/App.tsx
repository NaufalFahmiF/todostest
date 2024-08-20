import { Container, Stack } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Library from "./pages/library";

export const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:5000/api" : "/api";

function App() {
	return (
		<Router>
			<Stack h='100vh'>
				<Navbar />
				<Container>
					<Routes>
						<Route path="/" element={<><TodoForm /><TodoList /></>} />
						<Route path="/library" element={<Library />} />
					</Routes>
				</Container>
			</Stack>
		</Router>
	);
}

export default App;
