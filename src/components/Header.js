import React from 'react';
import { Progress, Level, Heading, Title } from 'reactbulma';

const Header = ({totalIncomplete, totalComplete, title}) => (
    <div>
        <Level>
            <Level.Item hasTextCentered>
                <div>
                    <Heading className="text-white">Incomplete</Heading>
                    <Title className="text-white">{totalIncomplete}</Title>
                </div>
            </Level.Item>
            <Level.Item hasTextCentered>
                <div>
                    <Heading className="text-white">Complete</Heading>
                    <Title className="text-white">{totalComplete}</Title>                    
                </div>
            </Level.Item>
        </Level>
            <Progress className="Bar" warning value={totalComplete / (totalComplete + totalIncomplete) * 100} max="100"></Progress>
    </div>
)

export default Header;