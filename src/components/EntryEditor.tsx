import React, { useEffect, useState } from 'react';
import {
  Flex,
} from '@contentful/forma-36-react-components';
import { EditorExtensionSDK } from '@contentful/app-sdk';
import 'react-json-pretty/themes/monikai.css';
import JSONPretty from 'react-json-pretty';

interface EditorProps {
  sdk: EditorExtensionSDK;
}
const Entry = (props: EditorProps) => {

  // contentful library to fetch objects
  const contentful = require('contentful')

  // Usestate for Json preview page
  const [page, setPage] = useState()

  // Assign preview token
  let accessToken: any = props.sdk.parameters.instance

  // This creates the client and uses the sdk variables
  const client = contentful.createClient({
    space: props.sdk.ids.space,
    environment: props.sdk.ids.environment, // defaults to 'master' if not set
    accessToken: accessToken.apiToken,
    host: 'preview.contentful.com'
  })

  /** useEffect equivalent to didMountComponent to i
  // nitialize our API call one time */
  useEffect(() => {

    // API 
    client.getEntry(props.sdk.ids.entry)
      .then((entry: { fields: React.SetStateAction<undefined>; }) => {
        setPage(entry.fields);
      })
  }, []);

  return <React.Fragment>
    <Flex marginTop="spacingL" margin="spacingL">


    <JSONPretty data={page}></JSONPretty>
    </Flex>

  </React.Fragment>;
};

export default Entry;
