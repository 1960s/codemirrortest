import { basicSetup} from "codemirror"
import {javascript} from "@codemirror/lang-javascript"
import {EditorView, gutter, GutterMarker} from "@codemirror/view"


let editor = new EditorView({


  extensions: [basicSetup, javascript(),lineNumbers()],
  parent: document.body
  
  

})
editor.focus()
