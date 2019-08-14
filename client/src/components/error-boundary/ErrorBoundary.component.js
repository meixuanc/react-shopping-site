import React, { Component } from 'react';
import { ErrorImageOverlay, ErrorImageContainer, ErrorImageText } from './ErrorBoundary.styles';

export default class ErrorBoundary extends Component {
    state = {
        hasErrored: false
    };

    static getDerivedStateFromError(error) {
        return { hasErrored: true };
    }

    componentDidCatch(error, info) {
        console.log(error);
    }

    render() {
        const { error } = this.props;
        if (this.state.hasErrored || error) {
            return (
                <ErrorImageOverlay>
                    <ErrorImageContainer imageUrl={'https://i.imgur.com/lKJiT77.png'} />
                    <ErrorImageText>A Dog Ate this Page</ErrorImageText>
                </ErrorImageOverlay>
            );
        }

        return this.props.children;
    }
}
