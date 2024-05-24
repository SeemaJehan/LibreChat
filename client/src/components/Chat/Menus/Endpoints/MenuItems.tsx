// import type { FC } from 'react';
// import { Close } from '@radix-ui/react-popover';
// import { EModelEndpoint, alternateName } from 'librechat-data-provider';
// import { useGetEndpointsQuery } from 'librechat-data-provider/react-query';
// import MenuSeparator from '../UI/MenuSeparator';
// import { getEndpointField } from '~/utils';
// import MenuItem from './MenuItem';

// const EndpointItems: FC<{
//   endpoints: EModelEndpoint[];
//   selected: EModelEndpoint | '';
// }> = ({ endpoints, selected }) => {
//   const { data: endpointsConfig } = useGetEndpointsQuery();
//   return (
//     <>
//       {endpoints &&
//         endpoints.map((endpoint, i) => {
//           if (!endpoint) {
//             return null;
//           } else if (!endpointsConfig?.[endpoint]) {
//             return null;
//           }
//           const userProvidesKey: boolean | null | undefined = getEndpointField(
//             endpointsConfig,
//             endpoint,
//             'userProvide',
//           );
//           return (
//             <Close asChild key={`endpoint-${endpoint}`}>
//               <div key={`endpoint-${endpoint}`}>
//                 <MenuItem
//                   key={`endpoint-item-${endpoint}`}
//                   title={alternateName[endpoint] || endpoint}
//                   value={endpoint}
//                   selected={selected === endpoint}
//                   data-testid={`endpoint-item-${endpoint}`}
//                   userProvidesKey={!!userProvidesKey}
//                   // description="With DALL·E, browsing and analysis"
//                 />
//                 {i !== endpoints.length - 1 && <MenuSeparator />}
//               </div>
//             </Close>
//           );
//         })}
//     </>
//   );
// };

// export default EndpointItems;

import { Root } from '@radix-ui/react-popover';
import { useChatContext, useAssistantsMapContext } from '~/Providers';

const EndpointItems = () => {
  const openAIEndpoint = 'openai'; // Hardcode the endpoint to OpenAI API
  const { conversation } = useChatContext();
  const { assistant_id = null } = conversation ?? {};
  const assistantMap = useAssistantsMapContext();

  const assistant = assistantMap?.[openAIEndpoint]?.[assistant_id ?? ''];
  const assistantName = (assistant && assistant?.name) || 'Assistant';

  const primaryText = assistant ? assistantName : 'Zaheen API';

  return (
    <Root>
      <div style={{ padding: '8px', fontWeight: 'bold' }}>{primaryText}</div>
    </Root>
  );
};

export default EndpointItems;
