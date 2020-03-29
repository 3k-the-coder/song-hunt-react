import React, { Component } from 'react'
import { Row, Col, Button } from 'antd'
import AddNewSongModal from './AddNewSongModal';

export default class ArtistDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAddSongModalVisible: false
        }
    }

    handleAddSongClick = () => {
        this.setState({isAddSongModalVisible: true})
    }

    toggleAddSongModalVisibility = (value) => {
        if(value){
            this.props.toggleReload(value)
        }
        this.setState({isAddSongModalVisible: false})
    }

    render() {
        return (
            <div className="artist-details-container">
                <Row>
                    <Col lg={12} md={12}>
                        <h1> Hi, {this.props.artistDetails.name} </h1>   
                    </Col>
                    <Col lg={12} md={12}>
                        <Button 
                            type="primary" 
                            className="btn-top-margin float-right"
                            onClick={this.handleAddSongClick}
                        > 
                            Add new song <b> +</b> 
                            
                        </Button> 
                    </Col>
                </Row>

                {
                    this.state.isAddSongModalVisible &&
                        <AddNewSongModal 
                            visible ={this.state.isAddSongModalVisible}
                            toggleAddSongModalVisibility={this.toggleAddSongModalVisibility}
                        />

                }
            </div>
        )
    }
}
