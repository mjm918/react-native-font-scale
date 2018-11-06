import React, { Component } from 'react';
import { Text, Platform } from 'react-native';
import PropTypes from 'prop-types';

const defaultFontSize = Platform.select({
    ios: 16,
    android: 14
})

class Label extends Component<{}>{

    static propTypes = {
        text: PropTypes.string.isRequired,
        color: PropTypes.string,
        size: PropTypes.number,
        weight: PropTypes.string,
        fixed: PropTypes.bool.isRequired,
        style: PropTypes.oneOfType([
            PropTypes.array,
            PropTypes.number,
            PropTypes.shape({}),
        ]),
        width: PropTypes.number,
        numberOfLines: PropTypes.number
    }

    render() {
        const { text, color, size, weight, fixed, style, width, numberOfLines } = this.props;
        let fontSize = size ? size : defaultFontSize;
        let fontColor = color ? color : 'black';
        let fontWeight = weight ? weight : 'normal';
        let lineHeight = fontSize * 1.2;
        let nol = fixed ? 1 : numberOfLines ? numberOfLines : 2;

        let letterWidth = 0.5476;
        if (width) { // support for android, works well for ios also
            let scaled = width / (text.length * letterWidth);
            fontSize = scaled > fontSize ? fontSize : scaled;
        }

        return (
            <Text
                numberOfLines={nol}
                allowFontScaling={false}
                style={[style, {
                    fontSize: fontSize,
                    color: fontColor,
                    fontWeight: fontWeight,
                    lineHeight: lineHeight,
                }]}>{text}</Text>
        )
    }

}

export { Label };