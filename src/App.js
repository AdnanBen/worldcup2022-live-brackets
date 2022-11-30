import logo from './logo.svg';
import './App.css';
import TournamentBracket from "react-svg-tournament-bracket";
import { useEffect, useState } from 'react';


function App() {

  const [aWinner, set_aWinner] = useState(".");
  const [aRunner, set_aRunner] = useState(".");

  const [bWinner, set_bWinner] = useState(".");
  const [bRunner, set_bRunner] = useState(".");

  const [cWinner, set_cWinner] = useState(".");
  const [cRunner, set_cRunner] = useState(".");

  const [dWinner, set_dWinner] = useState(".");
  const [dRunner, set_dRunner] = useState(".");

  const [eWinner, set_eWinner] = useState(".");
  const [eRunner, set_eRunner] = useState(".");

  const [fWinner, set_fWinner] = useState(".");
  const [fRunner, set_fRunner] = useState(".");

  const [gWinner, set_gWinner] = useState(".");
  const [gRunner, set_gRunner] = useState(".");

  const [hWinner, set_hWinner] = useState(".");
  const [hRunner, set_hRunner] = useState(".");

  const [data, setData] = useState(null);

  const [groupsCollected, setGroupsCollected] = useState(null)
  const [sortedGroups, setSortedGroups] = useState(null)

  const [sorted, setSorted] = useState(false);
  

  function compare( a, b ) {
    if ( a.group_points < b.group_points ) {
      return 1;
    } 
    else if ( a.group_points > b.group_points ) {
      return -1;
    } 
    else {
      if ( a.goal_differential < b.goal_differential ) {
        return 1;
      }
      else if ( a.goal_differential > b.goal_differential ) {
        return -1;
      }
      else {
        if ( a.goals_for < b.goals_for ) {
          return 1;
        }
        else if ( a.goals_for > b.goals_for ) {
          return -1;
        }
        else {
          return 0;
        }
      }
    }
  }

  function decide( a, b ) {
    return Math.random() < 0.5 ? 0 : 1
  }

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


  const winner49 = decide(aWinner, bRunner) == 0 ? aWinner : bRunner;
  const winner50 = decide(cWinner, dRunner) == 0 ? cWinner : dRunner;

  const winner51 = decide(eWinner, fRunner) == 0 ? eWinner : fRunner;
  const winner52 = decide(gRunner, hRunner) == 0 ? gRunner : hRunner;
  
  const winner53 = decide(bWinner, aRunner) == 0 ? bWinner : aRunner;
  const winner54 = decide(dWinner, cRunner) == 0 ? dWinner : cRunner;

  const winner55 = decide(fWinner, eRunner) == 0 ? fWinner : eRunner;
  const winner56 = decide(hWinner, gWinner) == 0 ? hWinner : gWinner;


  const winner57 = decide(winner49, winner50) == 0 ? winner49 : winner50;

  const winner58 = decide(winner51, winner52) == 0 ? winner51 : winner52;

  const winner59 = decide(winner53, winner54) == 0 ? winner53 : winner54;

  const winner60 = decide(winner55, winner56) == 0 ? winner55 : winner56;


  const winner61 = decide(winner57, winner58) == 0 ? winner57 : winner58;

  const winner62 = decide(winner59, winner60) == 0 ? winner59 : winner60;

  


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
      homeTeamName: winner49,
      awayTeamName: winner50,
      round: 2,
      matchNumber: 8,
    },
    {
      homeTeamName: winner51,
      awayTeamName: winner52,
      round: 2,
      matchNumber: 9,
    },
    {
      homeTeamName: winner53,
      awayTeamName: winner54,
      round: 2,
      matchNumber: 10,
    },
    {
      homeTeamName: winner55,
      awayTeamName: winner56,
      round: 2,
      matchNumber: 11,
    },
    {
      homeTeamName: winner57,
      awayTeamName: winner58,
      round: 3,
      matchNumber: 12,
    },
    {
      homeTeamName: winner59,
      awayTeamName: winner60,
      round: 3,
      matchNumber: 13,
    },
    {
      homeTeamName: winner61,
      awayTeamName: winner62,
      round: 4,
      matchNumber: 14,
    },
    

  ];

  return (
    <div className='bg'>
      <div className='App'>
        <TournamentBracket matches={matches} orientation={"portrait"} displayMatchNumber={false}/>
      </div>
    </div>
  );
}

export default App;
