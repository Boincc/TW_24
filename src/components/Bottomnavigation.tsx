import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';

function refreshMessages(): MessageExample[] {
    const getRandomInt = (max: number) => Math.floor(Math.random() * Math.floor(max));

    return Array.from(new Array(50)).map(
        () => messageExamples[getRandomInt(messageExamples.length)],
    );
}

export default function FixedBottomNavigation() {
    const [value, setValue] = React.useState(0);
    const ref = React.useRef<HTMLDivElement>(null);
    const [messages, setMessages] = React.useState(() => refreshMessages());

    React.useEffect(() => {
        (ref.current as HTMLDivElement).ownerDocument.body.scrollTop = 0;
        setMessages(refreshMessages());
    }, [value, setMessages]);

    return (
        // <Box sx={{ pb: 7 }} ref={ref}>
        <Box sx={{ pb: 7, backgroundColor: 'rgba(255,255,255,0.24)' }} ref={ref}>

        <CssBaseline />
            <List>
                {messages.map(({ primary, secondary, person }, index) => (
                    <ListItemButton key={index + person}>
                        <ListItemAvatar>
                            <Avatar alt="Profile Picture" src={person} />
                        </ListItemAvatar>
                        <ListItemText primary={primary} secondary={secondary} />
                    </ListItemButton>
                ))}
            </List>
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    sx={{ backgroundColor: 'rgba(114,7,103,0.46)' }}
                >
                    <BottomNavigationAction label="Новые" icon={<RestoreIcon />} sx={{ color: 'green' }} />
                    <BottomNavigationAction label="Избранное" icon={<FavoriteIcon />}  sx={{ color: 'red' }} />
                    <BottomNavigationAction label="Архив" icon={<ArchiveIcon />} sx={{color: 'darkviolet'}} />
                </BottomNavigation>
            </Paper>
        </Box>
    );
}

interface MessageExample {
    primary: string;
    secondary: string;
    person: string;
}

const messageExamples: readonly MessageExample[] = [
    {
        primary: 'Бранч на этой неделе?',
        secondary: "На этой неделе я буду в районе. Давай встретимся и перекусим.",
        person: '/static/images/avatar/5.jpg',
    },
    {
        primary: 'Подарок на день рождения',
        secondary: `У тебя есть предложение для хорошего подарка Джону на его годовщину работы. 
        Я действительно в замешательстве и хотел бы услышать твои мысли по этому поводу.`,
        person: '/static/images/avatar/1.jpg',
    },
    {
        primary: 'Рецепт для попробовать',
        secondary: 'Я попробую этот новый рецепт для барбекю. Думаю, это может быть потрясающе.',
        person: '/static/images/avatar/2.jpg',
    },
    {
        primary: 'Да!',
        secondary: 'У меня есть билеты на ReactConf на этот год.',
        person: '/static/images/avatar/3.jpg',
    },
    {
        primary: "Визит к врачу",
        secondary: 'Моя встреча с врачом перенесена на следующую субботу.',
        person: '/static/images/avatar/4.jpg',
    },
    {
        primary: 'Обсуждение',
        secondary: `Меню, которые генерируются нижней панелью приложения 
        (такие как нижнее навигационное меню или меню переполнения), 
        открываются в виде нижних листов на более высоком уровне, чем сама панель.`,
        person: '/static/images/avatar/5.jpg',
    },
    {
        primary: 'Летний барбекю',
        secondary: `Кто хочет устроить шашлычную в это выходные? 
        Я только что купил новую мебель для заднего двора и хотел бы разжечь гриль.`,
        person: '/static/images/avatar/1.jpg',

    },
];