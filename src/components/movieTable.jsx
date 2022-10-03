import React, {Component} from "react";
import { getMovies} from "../services/fakeMovieservice";
import Heart from "./heart";

export default class MovieTable extends Component {

    state= {
        getMvs: getMovies(),
        liked: false

    }

    handleDelete = (movie) => {
        // console.log("MM ", movie);
        const newMovies = this.state.getMvs.filter(m => m._id !== movie._id)
        this.setState({getMvs: newMovies});
    };

    handleLike = (movie) =>{
        let movies = [...this.state.getMvs];
        
        let index = movies.indexOf(movie);
        // movie[index] = {...movies[index]};
        movies[index].liked = !movies[index].liked;
        console.log("index", index)
        this.setState({getMvs: movies});
    }

    render(){
        // const getMvs = getMovies();
        // console.log("gg", getMovies());
        const {length : moviesCount} = this.state.getMvs;
        if(moviesCount === 0) return <p>There are No Movies Available</p>
        return(
            <React.Fragment>
        <h2 className="m-2 p-2">There are {moviesCount} movies in Available</h2>
        <table className={"table table-striped table-dark"} >
            <thead>
                        <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Genere</th>
                        <th scope="col">Stock</th>
                        <th scope="col">Rating</th>
                        <th scope="col">Heart</th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.getMvs.map(( movie ) => 
                                <tr key={movie._id}>
                                    <td>{movie.title}</td>
                                    <td>{movie.genre.name}</td>
                                    <td>{movie.numberInStock}</td>
                                    <td>{movie.dailyRentalRate}</td>
                                    <td>
                                    <Heart 
                                    like={movie.liked}
                                    onClick={() => this.handleLike(movie)}
                                    />
                                    </td>
                                    <td><button onClick={() => this.handleDelete(movie)} className="btn btn-danger btn-sm rounded">delete</button></td>
                                </tr>
                            )} 
                    </tbody>
                </table>
        </React.Fragment>
        
        )
    }
}