import React from 'react';
import { Button } from '@contentful/forma-36-react-components';
import { FieldExtensionSDK } from '@contentful/app-sdk';

interface FieldProps {
  sdk: FieldExtensionSDK;
}

const Field = (props: FieldProps) => {
  // Assign preview token
  let accessToken: any = props.sdk.parameters.instance

  // Dialog functionality
  const openDialog = () => {
    props.sdk.dialogs.openCurrentApp({
      position: 'center',
      shouldCloseOnOverlayClick: true,
      shouldCloseOnEscapePress: true,
      parameters: {     
        space: props.sdk.ids.space,
        environment: props.sdk.ids.environment, // defaults to 'master' if not set
        accessToken: accessToken.apiToken,
        entryId: props.sdk.ids.entry },
    })
  }
  
  return <>
  <Button buttonType="muted" onClick={openDialog} size="small">Preview</Button>
  </>
};

export default Field;
