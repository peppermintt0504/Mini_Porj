import React from "react";
import {Grid, Text, Button, Image} from "../elements";

import { Route, Routes, useNavigate } from "react-router-dom";
import { useSelector ,useDispatch} from "react-redux";




const Post = (props) => {
    // console.log(props)

    const navigate = useNavigate();

    return(
        <>
        <Grid Border='1px solid black' width='385px' height='600px' margin='0 0 20px 0' B_radius='20px' >
            <Grid height='70px' padding='0 15px' is_flex justify_content='space-between'>
                <Grid is_flex>
                    <Image shape='circle' size='40'></Image>
                    <Text margin='0 0 0 7px'>{props.user_info.user_name}</Text>
                </Grid>
                <Text>{props.insert_dt}</Text>
            </Grid>

            <Grid width='100%' height='300px'>
                <Image src={props.image_url} shape='imagePost'>
                </Image>
            </Grid>
            <Grid padding='10px 15px' margin='0 0 10px 0' position='relative' height='225px'>
                <Grid is_flex justify_content='flex-start' align_items='center' margin='0 10px 15px 0'>
                    <Image shape='circle' size='40' margin='0 10px 0 0' src={props.user_info.user_profile}></Image>
                    <Text F_size='20px' F_weight='600' >{props.title}</Text>
                </Grid>
                <Text margin='0 0 20px 0' height='120px'>{props.contents}</Text>
                <Grid position='absolute' bottom='15px'>
                    <Text>{props.tag.map((T,idx)=>{return (`#${T }  `)})}</Text>
                </Grid>
            </Grid>
        </Grid>
        </>


    )
}


export default Post;