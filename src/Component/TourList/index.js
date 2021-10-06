import React, { Component } from 'react'
import "./TourList.scss";
import Tour from "../Tour/Tour";
import {tourdata} from "../tourdata";

export default class Tourlist extends Component {
    state = {
        tours: tourData
    };
    removeTour = id => {
       console.log(id);

        const {tours} = this.state;
        const sortedTours = tours.filter(tour => tour.id !==id);
        this.setState({
            tours: sortedTours
        });
    };
    render() {
        const {tours} = this.state;
        console.log(this.state.tours);
        
        return ( 
            <section className="tourlist">
                {tours.map(tour => {
                    <Tour key={tour.id} tour={tour} removeTours={this.removeTour} />
            })}
        </section>
      );
    }
}
