import React from 'react';
import { Progress, Level, Heading, Title } from 'reactbulma';

const Header = ({totalIncomplete, title}) => (
    <div>
        <Level>
            <Level.Item hasTextCentered>
                <div>
                    <Heading>{title}</Heading>
                    <Title>{totalIncomplete}</Title>
                </div>
            </Level.Item>

        </Level>
            <Progress warning value="37" max="100"></Progress>
    </div>
)

export default Header;