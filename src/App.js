import logo from './logo.svg';
import './App.css';
import TournamentBracket from "react-svg-tournament-bracket";
import { useEffect, useState } from 'react';


function App() {

  const [aWinner, set_aWinner] = useState("A");
  const [aRunner, set_aRunner] = useState("A");

  const [bWinner, set_bWinner] = useState("A");
  const [bRunner, set_bRunner] = useState("A");

  const [cWinner, set_cWinner] = useState("A");
  const [cRunner, set_cRunner] = useState("A");

  const [dWinner, set_dWinner] = useState("A");
  const [dRunner, set_dRunner] = useState("A");

  const [eWinner, set_eWinner] = useState("A");
  const [eRunner, set_eRunner] = useState("A");

  const [fWinner, set_fWinner] = useState("A");
  const [fRunner, set_fRunner] = useState("A");

  const [gWinner, set_gWinner] = useState("A");
  const [gRunner, set_gRunner] = useState("A");

  const [hWinner, set_hWinner] = useState("A");
  const [hRunner, set_hRunner] = useState("A");

  const [data, setData] = useState(null);

  const [sorted, setSorted] = useState(false);
  

  function compare( a, b ) {
    if ( a.wins < b.wins ){
      return 1;
    }
    if ( a.wins > b.wins ){
      return -1;
    }
    return 0;
  }
  const [groupsCollected, setGroupsCollected] = useState(null)

  const [sortedGroups, setSortedGroups] = useState(null)


  useEffect(() => {
    fetch("https://worldcupjson.net/teams")
    .then(response => response.json())
    .then(d => setData(d));
  }, [])

  useEffect(() => {

    // get A teams
    if (data) {
      const groupA = data['groups'][0]['teams']
      const groupB = data['groups'][1]['teams']
      const groupC = data['groups'][2]['teams']
      const groupD = data['groups'][3]['teams']
      const groupE = data['groups'][4]['teams']
      const groupF = data['groups'][5]['teams']
      const groupG = data['groups'][6]['teams']
      const groupH = data['groups'][7]['teams']

      const newArr = []
      newArr.push(groupA)
      newArr.push(groupB)
      newArr.push(groupC)
      newArr.push(groupD)
      newArr.push(groupE)
      newArr.push(groupF)
      newArr.push(groupG)
      newArr.push(groupH)

      setGroupsCollected(newArr)

      
    }
    
  }, [data])

  useEffect(() => {
    if (!sorted && groupsCollected) {
    const arr = [...groupsCollected]

    arr.forEach(element => {
      element.sort(compare)
    });

    console.log("sorted")
    setSortedGroups(arr)
    setSorted(true)
    }

  }, [groupsCollected])

  useEffect(() => {
    if (sorted) {
      console.log(sortedGroups)
      set_aWinner(sortedGroups[0][0].name)
      set_aRunner(sortedGroups[0][1].name)

      set_bWinner(sortedGroups[1][0].name)
      set_bRunner(sortedGroups[1][1].name)

      set_cWinner(sortedGroups[2][0].name)
      set_cRunner(sortedGroups[2][1].name)

      set_dWinner(sortedGroups[3][0].name)
      set_dRunner(sortedGroups[3][1].name)

      set_eWinner(sortedGroups[4][0].name)
      set_eRunner(sortedGroups[4][1].name)

      set_fWinner(sortedGroups[5][0].name)
      set_fRunner(sortedGroups[5][1].name)

      set_gWinner(sortedGroups[6][0].name)
      set_gRunner(sortedGroups[6][1].name)

      set_hWinner(sortedGroups[7][0].name)
      set_hRunner(sortedGroups[7][1].name)

    }

  }, [sortedGroups])


  // const winner49 = useState("A");
  // const winner50 = useState("A");

  // const winner51 = useState("A");
  // const winner52 = useState("A");

  // const winner53 = useState("A");
  // const winner54 = useState("A");

  // const winner55 = useState("A");
  // const winner56 = useState("A");

  


  const matches = [
    {
      homeTeamName: aWinner,
      awayTeamName: bRunner,
      round: 1,
      matchNumber: 1,
    },
    {
      homeTeamName: cWinner,
      awayTeamName: dRunner,
      round: 1,
      matchNumber: 2,
    },
    {
      homeTeamName: eWinner,
      awayTeamName: fRunner,
      round: 1,
      matchNumber: 3,
    },
    {
      homeTeamName: gWinner,
      awayTeamName: hRunner,
      round: 1,
      matchNumber: 4,
    },
    {
      homeTeamName: bWinner,
      awayTeamName: aRunner,
      round: 1,
      matchNumber: 5,
    },
    {
      homeTeamName: dWinner,
      awayTeamName: cRunner,
      round: 1,
      matchNumber: 6,
    },
    {
      homeTeamName: fWinner,
      awayTeamName: eRunner,
      round: 1,
      matchNumber: 7,
    },
    {
      homeTeamName: hWinner,
      awayTeamName: gRunner,
      round: 1,
      matchNumber: 8,
    },
    {
      homeTeamName: ".",
      awayTeamName: ".",
      round: 2,
      matchNumber: 8,
    },
    {
      homeTeamName: ".",
      awayTeamName: ".",
      round: 2,
      matchNumber: 9,
    },
    {
      homeTeamName: ".",
      awayTeamName: ".",
      round: 2,
      matchNumber: 10,
    },
    {
      homeTeamName: ".",
      awayTeamName: ".",
      round: 2,
      matchNumber: 11,
    },
    {
      homeTeamName: ".",
      awayTeamName: ".",
      round: 3,
      matchNumber: 12,
    },
    {
      homeTeamName: ".",
      awayTeamName: ".",
      round: 3,
      matchNumber: 13,
    },
    {
      homeTeamName: ".",
      awayTeamName: ".",
      round: 4,
      matchNumber: 14,
    },

  ];

  return (
    <div className='App'>
      <TournamentBracket matches={matches} orientation={"portrait"} displayMatchNumber={false}/>
    </div>
  );
}

export default App;
