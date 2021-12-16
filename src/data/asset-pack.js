export default
    {
        'sprites': {
            'player': {
                'url': '/static/assets/wizard.png',
                'frameWidth': 166,
                'frameHeight': 136,
                'animations': {
                    'ultimateLeft': { 'loc': [{ 'x': 0, 'y': 0 }, { 'x': 166, 'y': 0 }, { 'x': 332, 'y': 0 }, { 'x': 498, 'y': 0 }, { 'x': 664, 'y': 0 }, { 'x': 830, 'y': 0 }, { 'x': 996, 'y': 0 }, { 'x': 1162, 'y': 0 }] },
                    'ultimateRight': { 'loc': [{ 'x': 0, 'y': 136 }, { 'x': 166, 'y': 136 }, { 'x': 332, 'y': 136 }, { 'x': 498, 'y': 136 }, { 'x': 664, 'y': 136 }, { 'x': 830, 'y': 136 }, { 'x': 996, 'y': 136 }, { 'x': 1162, 'y': 136 }] },
                    'attackLeft': { 'loc': [{ 'x': 0, 'y': 272 }, { 'x': 166, 'y': 272 }, { 'x': 332, 'y': 272 }, { 'x': 498, 'y': 272 }, { 'x': 664, 'y': 272 }, { 'x': 830, 'y': 272 }, { 'x': 996, 'y': 272 }, { 'x': 1162, 'y': 272 }] },
                    'attackRight': { 'loc': [{ 'x': 0, 'y': 408 }, { 'x': 166, 'y': 408 }, { 'x': 332, 'y': 408 }, { 'x': 498, 'y': 408 }, { 'x': 664, 'y': 408 }, { 'x': 830, 'y': 408 }, { 'x': 996, 'y': 408 }, { 'x': 1162, 'y': 408 }] },
                    'deathLeft': { 'loc': [{ 'x': 0, 'y': 544 }, { 'x': 166, 'y': 544 }, { 'x': 332, 'y': 544 }, { 'x': 498, 'y': 544 }, { 'x': 664, 'y': 544 }, { 'x': 830, 'y': 544 }, { 'x': 996, 'y': 544 }] },
                    'deathRight': { 'loc': [{ 'x': 0, 'y': 680 }, { 'x': 166, 'y': 680 }, { 'x': 332, 'y': 680 }, { 'x': 498, 'y': 680 }, { 'x': 664, 'y': 680 }, { 'x': 830, 'y': 680 }, { 'x': 996, 'y': 680 }] },
                    'fallLeft': { 'loc': [{ 'x': 0, 'y': 816 }, { 'x': 166, 'y': 816 }] },
                    'fallRight': { 'loc': [{ 'x': 0, 'y': 952 }, { 'x': 166, 'y': 952 }] },
                    'hitLeft': { 'loc': [{ 'x': 0, 'y': 1088 }, { 'x': 166, 'y': 1088 }, { 'x': 332, 'y': 1088 }, { 'x': 498, 'y': 1088 }] },
                    'hitRight': { 'loc': [{ 'x': 0, 'y': 1224 }, { 'x': 166, 'y': 1224 }, { 'x': 332, 'y': 1224 }, { 'x': 498, 'y': 1224 }] },
                    'idleLeft': { 'loc': [{ 'x': 0, 'y': 1360 }, { 'x': 166, 'y': 1360 }, { 'x': 332, 'y': 1360 }, { 'x': 498, 'y': 1360 }, { 'x': 664, 'y': 1360 }, { 'x': 830, 'y': 1360 }] },
                    'idleRight': { 'loc': [{ 'x': 0, 'y': 1496 }, { 'x': 166, 'y': 1496 }, { 'x': 332, 'y': 1496 }, { 'x': 498, 'y': 1496 }, { 'x': 664, 'y': 1496 }, { 'x': 830, 'y': 1496 }] },
                    'jumpLeft': { 'loc': [{ 'x': 0, 'y': 1632 }, { 'x': 166, 'y': 1632 }] },
                    'jumpRight': { 'loc': [{ 'x': 0, 'y': 1768 }, { 'x': 166, 'y': 1768 }] },
                    'runLeft': { 'loc': [{ 'x': 0, 'y': 1904 }, { 'x': 166, 'y': 1904 }, { 'x': 332, 'y': 1904 }, { 'x': 498, 'y': 1904 }, { 'x': 664, 'y': 1904 }, { 'x': 830, 'y': 1904 }, { 'x': 996, 'y': 1904 }, { 'x': 1162, 'y': 1904 }] },
                    'runRight': { 'loc': [{ 'x': 0, 'y': 2040 }, { 'x': 166, 'y': 2040 }, { 'x': 332, 'y': 2040 }, { 'x': 498, 'y': 2040 }, { 'x': 664, 'y': 2040 }, { 'x': 830, 'y': 2040 }, { 'x': 996, 'y': 2040 }, { 'x': 1162, 'y': 2040 }] },
                }
            },
            'projectile': {
                'url': '/static/assets/fireball.png',
                'frameWidth': 17,
                'frameHeight': 34,
                'animations': {
                    'projectile': { 'loc': [{ 'x': 0, 'y': 0 }, { 'x': 17, 'y': 0 }, { 'x': 34, 'y': 0 }, { 'x': 51, 'y': 0 }, { 'x': 68, 'y': 0 }] },
                }
            },
            'enemies': {
                'bat': {
                    'url': '/static/assets/bat.png',
                    'frameWidth': 64,
                    'frameHeight': 64,
                    'animations': {
                        'batLeft': { 'loc': [{ 'x': 0, 'y': 0 }, { 'x': 64, 'y': 0 }, { 'x': 128, 'y': 0 }] },
                        'batRight': { 'loc': [{ 'x': 0, 'y': 64 }, { 'x': 64, 'y': 64 }, { 'x': 128, 'y': 64 }] },
                    }
                },
                'skeleton': {
                    'url': '/static/assets/skeleton.png',
                    'frameWidth': 32,
                    'frameHeight': 32,
                    'animations': {
                        'skeletonLeft': { 'loc': [{ 'x': 0, 'y': 0 }, { 'x': 32, 'y': 0 }, { 'x': 64, 'y': 0 }] },
                        'skeletonRight': { 'loc': [{ 'x': 0, 'y': 32 }, { 'x': 32, 'y': 32 }, { 'x': 64, 'y': 32 }] },
                    }
                },
                'saw': {
                    'url': '/static/assets/saw.png',
                    'frameWidth': 50,
                    'frameHeight': 50,
                    'animations': {
                        'sawLeft': { 'loc': [{ 'x': 0, 'y': 0 }, { 'x': 50, 'y': 0 }, { 'x': 100, 'y': 0 }] },
                        'sawRight': { 'loc': [{ 'x': 0, 'y': 50 }, { 'x': 50, 'y': 50 }, { 'x': 100, 'y': 50 }] },
                    }
                }
            },
            'perk': {
                'url': '/static/assets/perk.png',
                'frameWidth': 24,
                'frameHeight': 24,
                'position': [
                    { 'x': 0.40, 'y': 0.25 },
                    { 'x': 0.05, 'y': 0.45 },
                    { 'x': 0.95, 'y': 0.40 },
                    { 'x': 0.55, 'y': 0.80 },
                    { 'x': 0.05, 'y': 0.80 },
                    { 'x': 0.90, 'y': 0.73 },
                ],
                'variety': [
                    { 'name': 'BS', 'text': 'Bonus Heart +1', 'color': '#c83232' },
                    { 'name': 'JB', 'text': 'Jump Boost \nIncrease +0.2', 'color': '#00fa6c' },
                    { 'name': 'MS', 'text': 'Movement Speed \nIncrease +0.2', 'color': '#7f4cc7' },
                    { 'name': 'FR', 'text': 'FireRate \nIncrease -0.2', 'color': '#ff8300' },
                    { 'name': 'MANA', 'text': 'Mana \nIncrease +1', 'color': '#00ffff' },
                ],
                'animations': {
                    'BS': { 'loc': [{ 'x': 0, 'y': 0 }, { 'x': 24, 'y': 0 }, { 'x': 48, 'y': 0 }, { 'x': 72, 'y': 0 }] },
                    'JB': { 'loc': [{ 'x': 0, 'y': 24 }, { 'x': 24, 'y': 24 }, { 'x': 48, 'y': 24 }, { 'x': 72, 'y': 24 }] },
                    'MS': { 'loc': [{ 'x': 0, 'y': 48 }, { 'x': 24, 'y': 48 }, { 'x': 48, 'y': 48 }, { 'x': 72, 'y': 48 }] },
                    'FR': { 'loc': [{ 'x': 0, 'y': 72 }, { 'x': 24, 'y': 72 }, { 'x': 48, 'y': 72 }, { 'x': 72, 'y': 72 }] },
                    'MANA': { 'loc': [{ 'x': 0, 'y': 96 }, { 'x': 24, 'y': 96 }, { 'x': 48, 'y': 96 }, { 'x': 72, 'y': 96 }] },
                }
            },
            'tileset': {
                'url': '/static/assets/tileset.png',
                'frameWidth': 48,
                'frameHeight': 48,
                'columns': 18,
                'ignoreFrame': [-1],
                // 'painfulFrame': [123, 144, 145, 146, 166, 167, 183, 184, 185],
                'painfulFrame': [0],
                'map': [
                    4,    1,    2,    3,    4,    5,    6,    21,   8,    1,    2,    3,    4,    5,    1,    2,    3,    4,    5,    1,    6,    21,   8,    5,    4,    1,    2,
                    18,   19,   20,   21,   22,   23,   24,   174,  26,   27,   28,   29,   21,   19,   19,   21,   20,   19,   22,   23,   24,   174,  26,   27,   28,   29,   30,
                    36,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   48,
                    54,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   66,
                    54,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   66,
                    54,   -1,   -1,   -1,   -1,   -1,   -1,   144,  145,  145,  145,  145,  145,  145,  146,  -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   66,
                    54,   -1,   -1,   -1,   -1,   -1,   -1,   180,  181,  163,  181,  163,  163,  181,  182,  -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   66,
                    54,   -1,   -1,   -1,   -1,   -1,   -1,   173,  173,  173,  173,  173,  173,  173,  173,  -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   123,  66,
                    54,   166,  167,  -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   144,  145,  146,  -1,   -1,   -1,   -1,   -1,   -1,   66,
                    54,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   162,  181,  164,  -1,   -1,   -1,   -1,   -1,   -1,   66,
                    54,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   162,  163,  164,  -1,   -1,   -1,   -1,   -1,   -1,   66,
                    54,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   162,  163,  164,  -1,   -1,   -1,   -1,   -1,   -1,   66,
                    72,   -1,   183,  184,  185,  -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   180,  181,  182,  -1,   -1,   -1,   183,  184,  145,  84,
                    90,   91,   91,   91,   91,   92,   93,   91,   92,   110,  91,   91,   91,   91,   111,  93,   91,   92,   93,   91,   91,   91,   91,   91,   91,   91,   102,
                    112,  113,  113,  113,  113,  114,  112,  113,  114,  117,  113,  113,  113,  113,  118,  112,  113,  114,  112,  113,  113,  113,  113,  113,  113,  113,  118,

                ]
            },
        }
    };