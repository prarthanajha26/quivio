import React, { Component } from 'react';
import Modals from 'react-native-modal'; 


export default class CustomeModal extends Component {
    
    
    render() {
        const { visible, onRequestClose } = this.props;

        return (
            <Modals
                isVisible={visible}
                backdropOpacity={0.2}
                onBackdropPress={onRequestClose}
                onRequestClose={onRequestClose}
                style={{ margin: 0 }}
            >
                {!this.props?.needChild ? null : <React.Fragment>
                    {this.props.children}
                </React.Fragment>}
            </Modals>
        );
    }
}




