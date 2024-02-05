'use client'
import { Button, Paper } from "@mui/material";
import Image from "next/image";
import Carousel from "react-material-ui-carousel";

function Item(props: any)
{
    return (
        <Paper className={`min-h-[200px] w-[100%] relative`}>
            <img src={`/images/${props.item.url}`} alt={""}  />
            <div className="bg-[transparent] absolute top-[20%] text-[20px] left-[20px] font-bold">
              {props.item.description}
            </div>
        </Paper>
    )
}

export default function Home() {
  var items = [
    {
        name: "Random Name #1",
        description: "Probably the most random thing you have ever seen!",
        url: 'patient_banner1.webp'
    },
    {
        name: "Random Name #2",
        description: "Hello World!",
        url: 'patient_banner2.webp'
    },
    {
      name: "Random Name #2",
      description: "How are you",
      url: 'patient_banner4.webp'
  }
]
  return (
    <main>
      <Carousel animation={'slide'} duration={1000}>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    </main>
  );
}
