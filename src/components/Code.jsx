import Editor from "./Editor";
import { Box, styled } from "@mui/material";
import { useContext } from 'react';
import {DataContext} from "../context/Dataprovider"; 

const Container=styled( Box)`
background-color: #060606;
  height: 60vh;
  display: flex;`
const Code = () => {
  const { html, css, js, sethtml, setcss, setjs } = useContext(DataContext);
  return (
    <>
      <Container>
        <Editor title="Html" icon="/" color="#FF3C41" value={html}
                onChange={sethtml}/>
        <Editor title="Css" icon="*" color="#0EBEFF" value={css}
                onChange={setcss} />
        <Editor title="JavaScript" icon="{}" color="YELLOW" value={js}
                onChange={setjs} />
      </Container>
    </>
  );
};
export default Code;
