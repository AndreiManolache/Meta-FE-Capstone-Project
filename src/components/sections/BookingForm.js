import { Box, Button, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function ReservationForm (props) {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [people, setPeople] = useState(1);
  const [date, setDate] = useState("");
  const [occasion, setOccasion] = useState("");
  const [preferences, setPreferences] = useState("");
  const [comments, setComments] = useState("");

  const [finalTime, setFinalTime] = useState(
    props.availableTimes.map((times) => <option>{times}</option>)
  );

  function handleDateChange(e) {
    setDate(e.target.value);

    var stringify = e.target.value;
    const date = new Date(stringify);

    props.updateTimes(date);

    setFinalTime(props.availableTimes.map((times) => <option>{times}</option>));
  }

  return (
    <Box as="form" maxW="960px" mx="auto" px={4} py={32}>
      <SimpleGrid columns={3} gap={5}>
        <div>
          <label htmlFor="fName">First Name</label> <br></br>
          <input
            type="text"
            id="fName"
            placeholder="First Name"
            required
            minLength={2}
            maxLength={50}
            style={{
              width: "100%",
            }}
            value={fName}
            onChange={(e) => setFName(e.target.value)}
          ></input>
        </div>

        <div>
          <label htmlFor="lName">Last Name</label> <br></br>
          <input
            type="text"
            id="lName"
            placeholder="Last Name"
            minLength={2}
            maxLength={50}
            style={{
              width: "100%",
            }}
            value={lName}
            onChange={(e) => setLName(e.target.value)}
          ></input>
        </div>

        <div>
          <label htmlFor="email">Email</label> <br></br>
          <input
            type="email"
            id="email"
            placeholder="Email"
            style={{
              width: "100%",
            }}
            value={email}
            required
            minLength={4}
            maxLength={200}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>

        <div>
          <label htmlFor="phonenum">Phone Number</label> <br></br>
          <input
            type="tel"
            id="phonenum"
            placeholder="(xxx)-xxx-xxxx"
            value={tel}
            required
            minLength={10}
            maxLength={25}
            style={{
              width: "100%",
            }}
            onChange={(e) => setTel(e.target.value)}
          ></input>
        </div>

        <div>
          <label htmlFor="people">Number of People</label> <br></br>
          <input
            type="number"
            id="people"
            placeholder="Number of People"
            value={people}
            required
            min={1}
            max={100}
            style={{
              width: "100%",
            }}
            onChange={(e) => setPeople(e.target.value)}
          ></input>
        </div>

        <div>
          <label htmlFor="date">Select Date</label> <br></br>
          <input
            type="date"
            id="date"
            required
            style={{
              width: "100%",
            }}
            value={date}
            onChange={handleDateChange}
          ></input>
        </div>

        <div>
          <label htmlFor="time">Select Time</label> <br></br>
          <select 
            id="time" 
            style={{
              width: "100%",
            }}
            required
          >
            {finalTime}
          </select>
        </div>

        <div>
          <label htmlFor="occasion">Occasion</label> <br></br>
          <select
            id="occasion"
            style={{
              width: "100%",
            }}
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
          >
            <option>None</option>
            <option>Birthday</option>
            <option>Anniversary</option>
            <option>Engagement</option>
            <option>Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="preferences">Seating preferences</label> <br></br>
          <select
            id="preferences"
            style={{
              width: "100%",
            }}
            value={preferences}
            onChange={(e) => setPreferences(e.target.value)}
          >
            <option>None</option>
            <option>Indoors</option>
            <option>Outdoor (Patio)</option>
            <option>Outdoor (Sidewalk)</option>
          </select>
        </div>

      </SimpleGrid>

      <Box mt={5}>
        <label htmlFor="comments">Additional Comments</label> <br></br>
        <textarea
          id="comments"
          rows={4}
          placeholder="Additional Comments"
          value={comments}
          onChange={(e) => setComments(e.target.value)}
          style={{
            width: "100%",
          }}
        />
      </Box>
      <Box textAlign="center">
        <br></br>
        <Text bg="gray.300" color="primary" borderRadius="md" fontSize="sm" p={4} mb={5}>
            Note: You cannot edit your reservation after submission. <br />Please
            double-check your answer before submitting your reservation request.
        </Text>
        <Link to="/confirmation">
          <Button borderRadius="md" bg="brand.secondary" color="brand.dark" _hover={{ color: "black" }}>
            Book Table
          </Button>
        </Link>
      </Box>

    </Box>
  );
}
