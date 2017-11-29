import React from 'react';
import { Progress, Level, Heading, Title } from 'reactbulma';

const Header = ({totalIncomplete, title}) => (
    <div>
        <Level>
            <Level.Item hasTextCentered>
                <div>
                    <Heading className="text-white">{title}</Heading>
                    <Title className="text-white">{totalIncomplete}</Title>
                </div>
            </Level.Item>

        </Level>
            <Progress className="Bar" warning value="37" max="100"></Progress>
    </div>
)

export default Header;