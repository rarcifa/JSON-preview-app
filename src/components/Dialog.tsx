import React, { useEffect, useState } from 'react';
import { DialogExtensionSDK } from '@contentful/app-sdk';
// import the react-json-view component
import 'react-json-pretty/themes/monikai.css';
import JSONPretty from 'react-json-pretty';

interface DialogProps {
  sdk: DialogExtensionSDK;
}
const Dialog = (props: DialogProps) => {

  // contentful library to fetch objects
  const contentful = require('contentful')

  // Usestate for Json preview page
  const [page, setPage] = useState()

  /** useEffect equivalent to didMountComponent to i
  // nitialize our API call one time */
  useEffect(() => {
        // Assign token
        let data: any = props.sdk.parameters.invocation

        // This creates the client and uses the sdk variables
        const client = contentful.createClient({
          space: data.space,
          environment: data.environment, // defaults to 'master' if not set
          accessToken: data.accessToken,
          host: 'preview.contentful.com'
        })
      
          console.log(data)
          // API 
          client.getEntry(data.entryId)
            .then((entry: { fields: React.SetStateAction<undefined>; }) => {
              setPage(entry.fields);
            })
    // This ensures our app has enough space to render
    props.sdk.window.startAutoResizer();
  }, []);

  return <React.Fragment>
<JSONPretty data={page}></JSONPretty>
  </React.Fragment>;
};


export default Dialog;