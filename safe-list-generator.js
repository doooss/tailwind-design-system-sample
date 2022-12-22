// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs');

const getFiles = (dir, files_) => {
    files_ = files_ || [];
    const files = fs.readdirSync(dir);
    for (const i in files) {
        const name = dir + '/' + files[i];
        if (fs.statSync(name).isDirectory()) {
            getFiles(name, files_);
        } else {
            files_.push(name);
        }
    }
    return files_;
};

// 참조할 파일등릐 경로 지정
const files1 = getFiles('./src/components');
const files2 = getFiles('./src/styles');

const files = [...files1, ...files2];

const regex = /'(\w*:)?(\w*)(-)?(\w*)?(-)?(\w*)?'/g;

const safeObj = {};

// 참조할 파일들의 이름 규칙 지정
const FILE_NAME_ENDS_WITH = '.style.ts';

files.forEach((file) => {
    if (file.endsWith(FILE_NAME_ENDS_WITH)) {
        const contents = fs.readFileSync(file, 'utf8');

        const matches = contents.match(regex);
        if (matches) {
            matches.forEach((match) => {
                safeObj[match] = true;
            });
        }
    }
});

const safeList = Object.keys(safeObj);

// 첫번째 인자는 반드시 cva 이기때문에 제거
safeList.shift();

// safe-list.json 파일 생성, 해당 경로 tailwind.config.js의 content에 추가
fs.writeFileSync(
    './public/safelist.json',
    JSON.stringify(safeList).replace(/'/g, ''),
    'utf8',
);
