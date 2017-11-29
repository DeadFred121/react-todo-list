import React from 'react';
import { Progress, Level, Heading, Title } from 'reactbulma';

const Header = ({totalIncomplete, totalComplete}) => (
    <div>
        <Level>
            <Level.Item hasTextCentered>
                <div>
                    <Heading className="text-white">INCOMPLETE</Heading>
                    <Title className="text-white">{totalIncomplete}</Title>
                </div>
            </Level.Item>
            <Level.Item hasTextCentered>
                <div>
                    <Heading className="text-white">COMPLETE</Heading>
                    <Title className="text-white">{totalComplete}</Title>
                </div>
            </Level.Item>
        </Level>
            <Progress className="Bar" warning value="37" max="100"></Progress>
    </div>
)

export default Header;