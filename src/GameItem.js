import React, {Component} from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import LinearProgress from 'material-ui/LinearProgress'
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';

class GameItem extends Component {
    render() {
        var genres = this.props.data.genre.split(',');
        var genrelist = genres.map(function (genre, index) {
            return (
                <Chip key={index} style={{margin: '5% 0 5% 0'}}><Avatar size={32}>{genres[index][0]}</Avatar>{genre}</Chip>
            );
        }, this);

        return (
            <div className="box">
            <Card>
                <CardHeader
                    url={this.props.data.url}
                    title={this.props.data.title}
                    subtitle={this.props.data.platform}
                    releaseyear={this.props.data.release_year}
                    actAsExpander={false}
                    showExpandableButton={false}
                />
                <CardText>
                    <strong>Score: {this.props.data.score}</strong><br></br>
                    <strong>{this.props.data.release_year}</strong><br></br>
                    <em>URL: "{this.props.data.url}"</em>
                    <div>
                        {this.props.data.genre !== '' && genrelist}
                        {this.props.data.editors_choice === 'Y' && <Chip style={{margin: '5% 0 5% 0'}}><Avatar size={32}>E</Avatar>Editors Choice</Chip> }
                    </div>
                    <LinearProgress mode="determinate" value={this.props.data.score * 10}/>
                
                </CardText>
            </Card>
            </div>
        );
    }
}

export default GameItem;