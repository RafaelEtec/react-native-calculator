import React, { Component } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Button from "@/components/Button";
import Row from "@/components/Row";
import calculator, { initialState } from "@/util/calculator";

export default class App extends Component {
	state = initialState;
	
	handleTap = (type, value) => {
		this.setState(state => calculator(type, value, state));
	};
	
	render() {
		return (
            <View style={styles.container}>
                {/* Status bae here */}
                <SafeAreaView>
                    <Text style={styles.value}>
                        {parseFloat(this.state.currentValue).toLocaleString()}
                    </Text>

                    {/* Do create componentRow */}
                    <Row>
                        <Button
                            text="C"
                            theme="secondary"
                            onPress={() => this.handleTap("clear")}
                        />

                        <Button
                            text="+/-"
                            theme="secondary"
                            onPress={() => this.handleTap("posneg")}
                        />

                        <Button
                            text="%"
                            theme="secondary"
                            onPress={() => this.handleTap("percentage")}
                        />

                        <Button
                            text="/"
                            theme="accent"
                            onPress={() => this.handleTap("operator", "/")}
                        />
                    </Row>

                    {/* Number */}
                    <Row>
                        <Button text="7" onPress={() => this.handleTap("number", 7)} />
                        <Button text="8" onPress={() => this.handleTap("number", 8)} />
                        <Button text="9" onPress={() => this.handleTap("number", 9)} />
                        <Button
                            text="X"
                            theme="accent"
                            onPress={() => this.handleTap("operator", "*")}
                        />
                    </Row>

                    <Row>
                        <Button text="5" onPress={() => this.handleTap("number", 5)} />
                        <Button text="6" onPress={() => this.handleTap("number", 6)} />
                        <Button text="7" onPress={() => this.handleTap("number", 7)} />
                        <Button
                            text="-"
                            theme="accent"
                            onPress={() => this.handleTap("operator", "-")}
                        />
                    </Row>

                    <Row>
                        <Button text="1" onPress={() => this.handleTap("number", 1)} />
                        <Button text="2" onPress={() => this.handleTap("number", 2)} />
                        <Button text="3" onPress={() => this.handleTap("number", 3)} />
                        <Button
                            text="+"
                            theme="accent"
                            onPress={() => this.handleTap("operator", "+")}
                        />
                    </Row>

                    <Row>
                        <Button text="0" onPress={() => this.handleTap("number", 0)} />
                        <Button text="." onPress={() => this.handleTap("number", ".")} />
                        <Button
                            text="="
                            theme="primary"
                            onPress={() => this.handleTap("equal", "=")}
                        />
                    </Row>
                </SafeAreaView>
            </View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#202020",
		justifyContent: "flex-end",
	},
	value: {
		color: "#fff",
		fontSize: 42,
		textAlign: "right",
		marginRight: 20,
		marginBottom: 10,
	},
});