# react-native-label
Flexible, autoscale, sizetofit `<Text/>` component without any native module

It can be adjusted to fullfil the usage of `wrap_content` in android and `minimumScale` in iOS

# Available props
`text`
`color`
`size`
`weight`
`fixed`
`style`
`width`
`numberOfLines`

# Basic usage

You can use this if you want to make the text scale and fit the view without trauncate tail

                          <Label
                                text={'Your text'}
                                width={widthOfTheView}
                                fixed={true}
                                style={yourStyle}
                            />


