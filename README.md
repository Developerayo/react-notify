<center>
<img src="https://og-image.now.sh/React%20Notify.png?theme=light&md=1&fontSize=125px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnow-black.svg&images=https%3A%2F%2Fned.im%2Fnoty%2F_media%2Fnoty-v3-logo.png&images=https%3A%2F%2Fcdn4.iconfinder.com%2Fdata%2Ficons%2Flogos-3%2F600%2FReact.js_logo-512.png&widths=250&widths=350&widths=250&heights=300&heights=250&heights=250">
</center>

# React Notify
React Notify using Noty, noty is a dependency free notification library that simplifies creating alert's on a web application.

## Get Started

Demo: https://react-notify.now.sh/

Clone the repository:

```bash 
git clone https://github.com/Developerayo/react-notify.git && cd react-notify
```


Install the dependencies:

```bash 
npm install
```

To start the project run following command in your terminal:

```bash 
npm start
```

Now Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

To build the project run the following command in your terminal:

```bash 
npm run build
```

Launches the test runner in the interactive watch mode.
See the section about running tests for more information.

```bash 
npm test
```


Run the app in the development mode.<br>
Open **[http://localhost:3000](http://localhost:3000)** to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

# Noty

Noty is a dependency free notification library that simplifies creating alert's on a web application.

**Creating a notification**

```javascript
new Noty({
    ...
    text: 'Some notification text',
    ...
}).show();
```

**Noty Available functions listed below.**


|  Option | Default  |  Info |
|---|---|---|
|  type: string |  	'alert' |  alert, success, error, warning, info - ClassName generator uses this value → `noty_type__${type`} |
|  layout: string |  	'topRight' | top, topLeft, topCenter, topRight, center, centerLeft, centerRight, bottom, bottomLeft, bottomCenter, bottomRight - ClassName generator uses this value → `noty_layout__${layout}`  |
| theme: string  | 'mint'  | relax, mint, metroui - ClassName generator uses this value → `noty_theme__${theme}`  |
|  text: string | ''  |	This string can contain HTML too. But be careful and don't pass user inputs to this parameter.  |
| timeout: boolean,int  |  false | false, 1000, 3000, 3500, etc. Delay for closing event in milliseconds (ms). Set 'false' for sticky notifications.   |
|  progressBar: boolean |true|  true, false - Displays a progress bar if timeout is not false. |
| closeWith: [...string]  |  ['click'] |  	click, button |
|  animation.open: string,null,function | 'noty_effects_open'  |  If string, assumed to be CSS class name. If null, no animation at all. If function, runs the function. (v3.0.1+) You can use animate.css class names or your custom css animations as well. |
|  animation.close: string,null,function | animation.close: string,null,function  | If string, assumed to be CSS class name. If null, no animation at all. If function, runs the function. (v3.0.1+) You can use animate.css class names or your custom css animations as well.  |
|  sounds.sources: [...string] | 	[]  |  v3.1.0-beta Array of audio sources e.g 'some.wav' |
| sounds.volume: int  |  1 | v3.1.0-beta Integer value between 0-1 e.g 0.5   |
| sounds.conditions: [...string]  | []  |  v3.1.0-beta There are two conditions for now: 'docVisible' & 'docHidden'. You can use one of them or both. |
| docTitle.conditions: [...string]  | [...string]	[]  | 	v3.1.0-beta There are two conditions for now: 'docVisible' & 'docHidden'. You can use one of them or both.  |
| modal: boolean  | false  |  v3.1.0-beta Behaves like v2 but more stable |
| id: string,boolean  |  false |  You can use this id with querySelectors. Generated automatically if false. |
| force: boolean  | false| DOM insert method depends on this parameter. If false uses append, if true uses prepend.  |
|  queue: string |  'global' | NEW Named queue system. Details are [here](https://ned.im/noty/#/api).  |
|  killer: boolean,string |  false | 	If true closes all visible notifications and shows itself. If string(queueName) closes all visible notification on this queue and shows itself.  |
|  container: boolean,string |  false | Custom container selector string. Like '.my-custom-container'. Layout parameter will be ignored.  |
| buttons: [...Noty.button]  | []  |  	An array of Noty.button, for creating confirmation dialogs. Details are [here](https://ned.im/noty/#/api). |
| callbacks.beforeShow: function  | Default: () => {}  |  Details are [here](https://ned.im/noty/#/api). |
|  callbacks.onShow: function | Default: () => {}  | Details are [here](https://ned.im/noty/#/api).  |
|  callbacks.afterShow: function |  Default: () => {} |  Details are [here](https://ned.im/noty/#/api). |
|  callbacks.onClose: function |  Default: () => {} | Details are [here](https://ned.im/noty/#/api).  |
|  callbacks.afterClose: function | Default: () => {}  | Details are [here](https://ned.im/noty/#/api).  |
|  callbacks.onHover: function |  Default: () => {} |  Details are [here](https://ned.im/noty/#/api). |
| callbacks.onClick: function  |  Default: () => {} | Only works if closeWith = ['click']. Details are [here](https://ned.im/noty/#/api).  |
| callbacks.onTemplate: function  |  Default: () => {} | Mainly for DOM manipulations. Details are [here](https://ned.im/noty/#/api).  |
| visibilityControl: boolean  | false  | If true Noty uses PageVisibility API to handle timeout. To ensure that users do not miss their notifications.  |

# License
[MIT](LICENSE)
