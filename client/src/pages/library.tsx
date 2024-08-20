import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Flex, Link, List, ListItem, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
export default function Library() {
    return(
    <Flex display={"flex"}>
        <Tabs  colorScheme="purple" variant="enclosed" >
        <TabList>
            <Tab _selected={{color: 'white', bg: 'purple.400'}}>AI</Tab>
            <Tab _selected={{color: 'white', bg: 'purple.400'}}>Work</Tab>
            <Tab _selected={{color: 'white', bg: 'purple.400'}}>Gunadarma</Tab>
        </TabList>

        <TabPanels>
            <TabPanel>
                <List>
                <ListItem>
                    <Link href='https://chatgpt.com/' isExternal>
                        ChatGPT <ExternalLinkIcon mx='2px' />
                    </Link>
                </ListItem>
                <ListItem>
                    <Link href='https://www.perplexity.ai/' isExternal>
                        Perplexity <ExternalLinkIcon mx='2px' />
                    </Link> 
                </ListItem>
                <ListItem>
                    <Link href='https://claude.ai/' isExternal>
                        Claude <ExternalLinkIcon mx='2px' />
                    </Link>
                </ListItem>
                <ListItem>
                    <Link href='https://gemini.google.com/' isExternal>
                        Gemini <ExternalLinkIcon mx='2px' />
                    </Link>
                </ListItem>
                <ListItem>
                    <Link href='https://www.blackbox.ai/' isExternal>
                        Blackbox <ExternalLinkIcon mx='2px' />
                    </Link>
                </ListItem>
                <ListItem>
                    <Link href='https://poe.com/' isExternal>
                        Poe <ExternalLinkIcon mx='2px' />
                    </Link>
                </ListItem>
                </List>
            </TabPanel>
            <TabPanel>
            <List>
                <ListItem>
                    <Link href='https://docs.google.com/forms/' isExternal>
                        Google Form <ExternalLinkIcon mx='2px' />
                    </Link>
                </ListItem>
                <ListItem>
                    <Link href='https://docs.google.com/document/' isExternal>
                        Google Docs <ExternalLinkIcon mx='2px' />
                    </Link> 
                </ListItem>
                <ListItem>
                    <Link href='https://docs.google.com/spreadsheets/' isExternal>
                        Spreadsheet <ExternalLinkIcon mx='2px' />
                    </Link>
                </ListItem>
                <ListItem>
                    <Link href='https://drive.google.com/drive/' isExternal>
                        Google Drive <ExternalLinkIcon mx='2px' />
                    </Link>
                </ListItem>
                <ListItem>
                    <Link href='https://www.canva.com/' isExternal>
                        Canva <ExternalLinkIcon mx='2px' />
                    </Link>
                </ListItem>
                </List>
            </TabPanel>
            <TabPanel>
            <List>
                <ListItem>
                    <Link href='https://studentsite.gunadarma.ac.id/' isExternal>
                        StudentSite <ExternalLinkIcon mx='2px' />
                    </Link>
                </ListItem>
                <ListItem>
                    <Link href='https://v-class.gunadarma.ac.id/' isExternal>
                        V-Class <ExternalLinkIcon mx='2px' />
                    </Link> 
                </ListItem>
                <ListItem>
                    <Link href='https://vm.lepkom.gunadarma.ac.id/' isExternal>
                        VM-Lepkom <ExternalLinkIcon mx='2px' />
                    </Link>
                </ListItem>
                </List>
            </TabPanel>
        </TabPanels>
        </Tabs>
    </Flex>
)
}